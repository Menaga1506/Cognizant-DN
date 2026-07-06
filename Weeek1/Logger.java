public class Logger {

    private static Logger loggerObject;

    private Logger() {
    }

    public static Logger getLogger() {
        if (loggerObject == null) {
            loggerObject = new Logger();
        }
        return loggerObject;
    }

    public void writeLog(String text) {
        System.out.println("LOG : " + text);
    }
}
