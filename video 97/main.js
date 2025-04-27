import mongoose from "mongoose";
import express from "express";
import { employee } from "./modules/employee.js";

let conn = await mongoose.connect("mongodb+srv://vivekkushwaha8654v:ErvP40numM8ns2vV@sigma.xkkcrnx.mongodb.net/company")
const app = express()
const port = 3000
const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}
app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    res.render('index', { foo: "FOO" });
})


app.get('/generate', async (req, res) => {
    // clear the collection employee
    await employee.deleteMany({})

    // let n = ["harry","vivek","tony","tyler"]
    // const random = Math.floor(Math.random() * n.length);
    // let l =["python","java","javascript"]
    // const random1 = Math.floor(Math.random() * l.length);
    // let c =["New York", "london","paris"]
    // const random2 = Math.floor(Math.random() * c.length);

    // const dt = new employee({nameofemplooye:n.random, salary:343434, langauge:random1,city:random2,ismanager:true})
    // dt.save()
    // const dt = new employee({nameofemplooye:"vivek", salary:343434, langauge:"python",city:"new york",ismanager:true})
    // dt.save()
    // const dt = new employee({nameofemplooye:Math.floor(Math.random*n.length),salary:34343, langauge:Math.floor(Math.random*l.length),city:Math.floor(Math.random*c.length)})
    // dt.save()


    // generate random data
    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]
    for (let index = 0; index < 10; index++) {
        let e = await employee.create({
            nameofemplooye: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            langauge: getRandom(randomLang),
            city: getRandom(randomCities),
            ismanager: (Math.random() > 0.5) ? true : false
        })
        console.log(e)


    }

    res.render('index', { foo: "FOO" });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})