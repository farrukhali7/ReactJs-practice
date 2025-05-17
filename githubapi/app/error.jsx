'use client';

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] px-4">
      <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full text-center border-t-4 border-yellow-500">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-2">Something Went Wrong</h1>
          <p className="text-gray-600 mb-4">
            An unexpected error occurred. Please try again later.
          </p>
          <a
            href="/"
            className="inline-block bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
