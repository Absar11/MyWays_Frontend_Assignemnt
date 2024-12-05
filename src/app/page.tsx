"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';

const Home = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !mobileNumber || !email) {
      setError('Please fill in all fields');
    } else {
      // Save user details to local storage
      localStorage.setItem('userDetails', JSON.stringify({ name, mobileNumber, email }));
      // Redirect to permissions check page
      router.push('/check-permission-screen');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-md p-6 max-w-md">
        <h1 className="text-xl font-bold mb-4">AI Interview Instructions</h1>
        <p className="text-gray-600 mb-4">
          Follow these instructions carefully to complete the interview process.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Ensure your audio and video permissions are enabled.</li>
          <li>Answer all questions sincerely and confidently.</li>
          <li>Complete the test without interruptions.</li>
        </ul>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}

        </form>

        <Link href="/check-permission-screen">
          <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Proceed to Permissions Check
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;