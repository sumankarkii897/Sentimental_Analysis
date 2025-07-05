import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-6 m-0">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base mb-2">
          © 2025 <span className="font-semibold">SentimentAnalyzer</span>. Built using React & Django.
        </p>
        <p className="text-sm sm:text-base">
          Final Year Project by <span className="font-semibold">Prasiddha Karki</span>,{' '}
          <span className="font-semibold">Sabin Sapkota</span>, and{' '}
          <span className="font-semibold">Suman Karki</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
