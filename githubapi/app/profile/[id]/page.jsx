import Image from "next/image";
import { notFound } from "next/navigation";
import GoHomeButton from "./GoHomeButton";


// [id] folder is named like this because = "This is a dynamic route. I don't know the exact value in advance — it could be anything, like a username or ID."

// optional
// export async function generateStaticParams() {
//   return [{ id: "shehza-d" }, { id: "owaiskhan909" }];
// }

export default async function page({ params }) {   //params is given as parameter to catch the value of a username of github from URL 
  const { id } = await params;  // and after it has catched then put it into id
  // instead of this line '' you can also write :
  // const id = params.id;  //Using { id } is a destructuring shortcut in JavaScript

  const res = await fetch(`https://api.github.com/users/${id}`);

  if (res.status !== 200) {
    notFound();
  }

  const data = await res.json();
  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] px-4">
    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
      <Image
        src={data.avatar_url}
        alt={data.name || "GitHub Avatar"}
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{data.name || "No Name"}</h1>
      <p className="mb-2">
        <b>GitHub ID:</b> {id}
      </p>
      <p className="mb-4">
        <b>Followers:</b> {data.followers} &nbsp; | &nbsp;
        <b>Following:</b> {data.following}
      </p>
      <GoHomeButton />
    </div>
  </div>
  );
}

// if you want to use a button that goes to home; make another component cuz next/router does not works in a async function... make another file component then call it here 