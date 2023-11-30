"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=ProductUpdate306",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button
        className="text-white bg-black rounded-md m-5 p-2"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
