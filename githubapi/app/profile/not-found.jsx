
export default function UsernameError() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] px-4">
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full text-center border-t-4 border-red-600">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-2">User Not Found</h1>
          <p className="text-gray-600 mb-4">
            We couldn't find a GitHub profile with that username.
          </p>
          <a href="/" className="inline-block bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition">
            Back to Search
          </a>
        </div>
      </div>
    </div>
  );
}
