// "use client"
import Image from "next/image";

export default function Home() {
  console.log("the id is ", process.env.NEXT_PUBLIC_ID)
  console.log("the secret is ", process.env.SECRET)
  return (
   <div>
    this is home {process.env.NEXT_PUBLIC_ID} and {process.env.SECRET}
   </div>
  );
}
