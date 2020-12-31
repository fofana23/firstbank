export class Logger {

  public static info(message: string){
    const format = 'dd/MM/yyyy, HH:mm:ss';
    const locale = 'en-US';
    let date = new Date();
    console.log('${formatDate(date)}: {message}')
  }
}

