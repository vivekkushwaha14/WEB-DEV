const fs = require("fs")
// const fs = require("fs/promises")
// console.log(fs)


 
console.log("starting")
fs.writeFileSync("vivek.txt", "iron man ")

fs.writeFile("vivek2.txt", "tyler durden", ()=>{
    console.log("done")
    fs.readFile("vivek2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("vivek.txt", "ironheart2", (e, d)=>{
    console.log(d)
})

console.log("ending")