package com.fofana23.app.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class DateUtils {

    public static String dateToString(Date date){
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
        return dateFormat.format(date);
    }
}



