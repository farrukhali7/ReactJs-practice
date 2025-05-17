"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const formHandler = (e) => {
    e.preventDefault(); // refresh nhi hone dega page

    const username = e.currentTarget.children[0].value;

    router.push(`/profile/${username}`); // works same as navigate in react-router-dom
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          GitHub ID Finder
          <img src="https://th.bing.com/th/id/OIP.9JG9CesHRMwXD6uoJpM3pAHaHa?rs=1&pid=ImgDetMain" alt="Magnifier Icon" className="w-18 h-18 object-contain"/>
        </h1>
      </div>

      <form onSubmit={formHandler} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
        <input
          name="username"
          type="text"
          placeholder="Enter GitHub username"
          className="px-4 py-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Search
        </button>
      </form>
    </div>


//     <div>
//       <form onSubmit={formHandler}>
//         <input type="text" className="border-2 border-red-500" />
//         <button>Search</button>
//       </form>
//     </div>
  );
}