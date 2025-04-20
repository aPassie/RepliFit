"use client";
import React from 'react';

const About = () => {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our website! We’re passionate about building elegant, performant web experiences.
          Our mission is to create intuitive and responsive applications that make a difference.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Built with ❤️ using Next.js and Tailwind CSS, this project is a showcase of clean code,
          modern UI/UX, and developer-friendly tools. Thanks for checking us out!
        </p>
      </div>
    </main>
  );
};

export default About;
