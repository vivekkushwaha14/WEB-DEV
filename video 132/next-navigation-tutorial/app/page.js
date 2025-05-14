"use client";
import Image from "next/image";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const seachParams = useSearchParams();
  return (
    <div>
      this is the home page and blog is {seachParams.get("blog")} and utm source is{seachParams.get("utm_source")}
    </div>
  )

}
