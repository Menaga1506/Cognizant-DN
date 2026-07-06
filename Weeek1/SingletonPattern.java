public class SingletonPatternExample {

    public static void main(String[] args) {

        Logger firstLogger = Logger.getLogger();
        Logger secondLogger = Logger.getLogger();

        firstLogger.writeLog("Application Started");
        secondLogger.writeLog("Application Running");

        if (firstLogger == secondLogger) {
            System.out.println("Single Logger Instance Created");
        }
    }
}
