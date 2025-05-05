import Image from "next/image";

export default function Home() {
  return (
  <div className="container my-5 size-80 bg-red-300 relative">
    <Image className=" mx-auto object-cover" fill={true}  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  );
}
