import React from 'react';

export default function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-teal-900 to-black text-white font-serif flex flex-col items-center justify-center text-center p-8'>
      <img src='/logo.png' alt='logo' className='w-24 h-24 mb-6' />
      <h1 className='text-5xl font-semibold text-cyan-300 mb-2'>Happinessx</h1>
      <h2 className='text-xl text-cyan-200 italic mb-6'>Awaken Your Dormented Instinct</h2>
      <p className='max-w-2xl text-gray-300 mb-8'>
        Healing for inner peace & balance. Gentle energy work that harmonizes mind and body — available online and in-person.
      </p>
      <div className='flex gap-4'>
        <a href='#' className='bg-cyan-600 text-black px-6 py-3 rounded-lg shadow hover:opacity-95'>Book a Session</a>
        <a href='#' className='border border-cyan-500 text-cyan-200 px-6 py-3 rounded-lg'>Message on WhatsApp</a>
      </div>
    </div>
  );
}
