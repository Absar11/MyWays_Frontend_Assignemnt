"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [name, setName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !mobileNumber || !email) {
      setError("Please fill in all fields");
    } else {
      setError(null); 
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ name, mobileNumber, email })
      );

      router.push("/check-permission-screen");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Enter Your Details</h1>
        <p className="text-gray-600 mb-4">
          Please provide your details to proceed with the interview process.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs italic">{error}</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Proceed to Permissions Check
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
