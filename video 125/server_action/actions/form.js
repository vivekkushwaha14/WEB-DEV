"use server"
import fs from "fs/promises"

export const submitaction = async (e) => {
    console.log(e.get("name"), e.get("add"))
     let a = await fs.writeFile('vivek.txt', `Name is ${e.get("name") } and address is ${e.get("add")}`)
  
  }

  
