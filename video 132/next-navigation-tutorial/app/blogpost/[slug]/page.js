"use client";
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

const page = () => {
    const params = useParams();
    const router = useRouter();
    useEffect(() => {
        router.push("/dashboard");
    }, [2333]);
  return (
    <div>
      {params.slug}
    <button onClick={() => router.push("/dashboard")}>
        dashboard
    </button>
    </div>
  )
}

export default page
