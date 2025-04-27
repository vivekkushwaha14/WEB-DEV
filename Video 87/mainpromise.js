import fs from "fs/promises"

let a = await fs.readFile("vivek.txt")

let b = await fs.appendFile("vivek.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b) 