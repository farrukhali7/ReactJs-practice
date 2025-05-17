"use client";
import { useRouter } from "next/navigation";

export default function GoHomeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return <button onClick={handleClick} className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition" >Back to Search</button>;
}
