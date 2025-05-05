"use client"

import Image from "next/image";

export default function Home() {
  const handleclick=async()=>{
    let data = {
      name: "tony",
      role : "genius  "
    }
    let a = await fetch("./api/add", {method: "POST" , headers:{
      "contect-Type": "application/json",},
      body: JSON.stringify(data)
    })
    let res = await a.json()
    console.log(res)
    
  }
  return (
  <div>
    <h1 className="text-x1">Next.js Api routes demo</h1>
    <button onClick={handleclick}>clickme</button>
  </div>
  );
}
