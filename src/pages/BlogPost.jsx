import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = {
  '1': { title: 'Somatic Grounding Practices', body: 'Detailed grounding exercises...'},
  '2': { title: 'Understanding Sattva, Rajas & Tamas', body: 'Clinical view of Ayurvedic mind states...' },
  '3': { title: 'Work-Life Integration for Women', body: 'Routines and micro-practices for sustainable energy.' }
};

export default function BlogPost(){
  const { id } = useParams();
  const p = posts[id] || { title: 'Not found', body: 'No post found' };
  return (
    <div className="min-h-screen p-8 bg-black text-white font-serif">
      <Link to="/blog" className="text-cyan-300">← Back</Link>
      <h1 className="text-4xl text-cyan-300 mt-4">{p.title}</h1>
      <div className="mt-6 text-gray-200">{p.body}</div>
    </div>
  )
}
