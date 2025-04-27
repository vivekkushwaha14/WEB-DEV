import mongoose from "mongoose";
let n = ["harry", "vivek", "tony", "tyler"]
let l = ["python", "java", "javascript"]
let c = ["New York", "london", "paris"]
const employeeSchema = new mongoose.Schema({
   nameofemplooye: String,
   salary: Number,
   langauge: String,
   city: String,
   ismanager: Boolean
}

);
export const employee = mongoose.model('employee', employeeSchema);
