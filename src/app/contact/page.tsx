"use client";
import React from 'react';
import Image from 'next/image';
import { MailIcon, GithubIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/prfile1.jpg" 
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Parth Sankhla</h1>
        <p className="text-lg mb-6">Upcoming Full-Stack Developer</p>

        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-2 justify-center">
            <MailIcon className="w-5 h-5" />
            <a href="mailto:parth.sankhla98@gmail.com" className="underline hover:text-gray-200">
              parth.sankhla98@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <GithubIcon className="w-5 h-5" />
            <a
              href="https://github.com/aPassie"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              github.com/aPassie
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
