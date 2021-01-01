package com.fofana23.app.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fofana23.app.transaction.Profile;
import com.fofana23.app.util.DateUtils;
import com.fofana23.app.util.NumberUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fofana23.app.exception.BusinessException;
import com.fofana23.app.model.Account;
import com.fofana23.app.model.AccountHolder;
import com.fofana23.app.model.lookup.MoneyFlow;
import com.fofana23.app.repository.AccountHolderRepository;
import com.fofana23.app.repository.AccountRepository;
import com.fofana23.app.transaction.Transaction;

@Service
public class UserService {
	private static final Logger log = LoggerFactory.getLogger(UserService.class);

	@Autowired
	AccountHolderRepository holderRepo;
	@Autowired
	AccountRepository accountRepo;
	
	public AccountHolder register(AccountHolder holder) throws BusinessException {
		if (holder.getEmail() == null || holder.getSsn() < 100000000) {
			log.error("**CRITICAL ERROR** either email or ssn is invalid");
			throw new BusinessException("Invalid request");
		}
		
		try {
			holder.setActiveDate(DateUtils.dateToString(new Date()));
			holder.setCreditScore(creditCheck());
			holder.setLoggedin(true);
			AccountHolder newHolder = holderRepo.save(holder);
			Account checking = new Account(null, MoneyFlow.CHECKING.fromDescription(), false, 0.0, newHolder);
			Account saving = new Account(null, MoneyFlow.SAVING.fromDescription(), false, 0.0, newHolder);
			List<Account> defaultAccounts = List.of(checking, saving);
			accountRepo.saveAll(defaultAccounts);
			log.info("default accounts are saved to data base <<--");
		} catch (Exception e) {
			if (e.getLocalizedMessage().contains("EMAIL"))
				throw new BusinessException("User with email already exists");
			else
				throw new BusinessException("Internal server error..Please contact for support");
		}
		
		return holderRepo.findByEmail(holder.getEmail());
	}
	public AccountHolder addAccount(Transaction transaction) throws BusinessException {
		log.info("user is adding account");
		AccountHolder holder = holderRepo.findById(transaction.getHolderId())
				.orElseThrow(() -> new BusinessException("No such user"));
		Account newAccount = new Account(null, transaction.getAccountName(), false, 0.0, holder);
		if (transaction.getCredit()) {
			if (holder.getCreditScore() < 600) {
				throw new BusinessException("Rejected: credit score is too low");
			}
			newAccount.setCredit(transaction.getCredit());
		}
		accountRepo.save(newAccount);
		return holderRepo.getOne(transaction.getHolderId());
	}

public AccountHolder login(Profile profile) throws BusinessException {
	AccountHolder holder = holderRepo.findByEmail(profile.getEmail());
	
	if (holder == null) {
		throw new BusinessException("No accounts found with this email");
	} else if (!holder.getPassword().equals(profile.getPassword())) {
		throw new BusinessException("Invalid credentials");
	}
	holder.setLoggedin(true);
	return holderRepo.save(holder);
	}

public AccountHolder editProfile(Profile profile) {
	log.info("user is editing account");
    AccountHolder holder = holderRepo.findByEmail(profile.getEmail());
    holder.setAddress(profile.getAddress());
    holder.setDob(profile.getDob());
    holder.setFirstname(profile.getFirstname());
    holder.setLastname(profile.getLastname());
    holder.setEmail(profile.getEmail());
    holder.setPassword(profile.getPassword());
    return holderRepo.save(holder);
	}
	
	public AccountHolder processTransaction(Transaction transaction, MoneyFlow type) {
		AccountHolder holder = holderRepo.findById(transaction.getHolderId())
				.orElseThrow(() -> new BusinessException("No such user"));
		List<Account> accounts = new ArrayList<>();
		
		switch (type) {
		case DEPOSIT:
			holder.getAccounts().stream().forEach(account -> {
				if (account.getName().equals(transaction.getAccountName())) {
					double amount = NumberUtils.addDouble(account.getBalance(), transaction.getAmount());
					account.setBalance(amount);
				}
				accounts.add(account);
			});
			break;
		case WITHDRAW:
			holder.getAccounts().stream().forEach(account -> {
				if (account.getName().equals(transaction.getAccountName())) {
					double amount = NumberUtils.subtractDouble(account.getBalance(), transaction.getAmount());
					account.setBalance(amount);
				}
				accounts.add(account);
			});
			break;
		}
	accountRepo.saveAll(accounts);
	return holderRepo.getOne(transaction.getHolderId());
	}
	public AccountHolder processTransfer(Transaction transaction) {
		AccountHolder holder = processTransaction(transaction, MoneyFlow.WITHDRAW);
		List<Account> accounts = new ArrayList<>();

		if (transaction.getReceiverEmail() != null) {
			AccountHolder receiver = holderRepo.findByEmail(transaction.getReceiverEmail());
			receiver.getAccounts().stream().forEach(account -> {
				if (account.getName().equals(MoneyFlow.CHECKING.fromDescription())) {
					double amount = NumberUtils.addDouble(account.getBalance(), transaction.getAmount());
					account.setBalance(amount);
				}
				accounts.add(account);

			});
		} else {
			holder.getAccounts().stream().forEach(account -> {
				if (account.getName().equals(transaction.getTransferAccount())) {
					double amount = NumberUtils.addDouble(account.getBalance(), transaction.getAmount());
					account.setBalance(amount);
				}
				accounts.add(account);

			});
		}
		accountRepo.saveAll(accounts);
		return holder;

	}
	
		private int creditCheck() {
			return NumberUtils.randomNumber(800, 500);
	
}
}
