const db = require("./connection")

class DataBase {
    constructor() {
        
        this.db = db
    }

    getAllEmployees() {
        return this.db.query("SELECT * FROM employee;")
    
    }

    addEmployee(newEmployee) {
        return this.db.query("INSERT INTO employee SET ?", newEmployee)
    }
} 
const mydbinstance = new DataBase()
console.log(mydbinstance instanceof DataBase ? true : false)

module.exports = new DataBase()