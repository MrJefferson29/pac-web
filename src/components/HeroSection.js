import React from 'react';
export default function HeroSection({ title, subtitle, imageUrl }) {
  return (
    <section className="text-center mb-8">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Hero"
          className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg text-gray-700">{subtitle}</p>
    </section>
  );
}
