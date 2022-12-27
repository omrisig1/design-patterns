public class Singleton {
    private static Singleton singleton_instance;

    public static getSingletonInstance() {
        if (singleton_instance === null) {
            singleton_instance = new Singleton();
        }
        return singleton_instance;
    }
    private static constructor() {}
}

public class SingletonMulti {
    // volatile so the value won't be cached
    private volatile static SingletonMulti singleton_instance;

    public static getSingletonInstance() {
        // check before maybe a redundant locking for better preformance
        if (singleton_instance != null) {
            return singleton_instance;
        }
        synchronized (this) {
            if (singleton_instance == null) {
                singleton_instance = new SingletonMulti();
            }
        }
        return singleton_instance;
    }

    private static constructor() {}
}
