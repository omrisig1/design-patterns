class Database {
    private static database : Database;
    private constructor() {}
    public static getDatabase(){
        if(!Database.database) {
            Database.database = new Database();
        }
        return Database.database;
    }
}
