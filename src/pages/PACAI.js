import React from 'react';
import HeroSection from '../components/HeroSection';
export default function PACAI() {
  return (
    <div className="container mx-auto">
      <HeroSection
        title="PAC AI"
        subtitle="Building an AI to store, analyze, and share African cultural heritage."
        imageUrl="https://source.unsplash.com/featured/?artificial,intelligence"
      />
      <section className="space-y-4">
        <p>
          PAC AI focuses on training a model designed to digitize oral histories, analyze endangered languages, and provide universal access to African culture. It preserves stories and practices passed down orally and makes them available for future learning and research.  fileciteturn1file0
        </p>
        <ul className="list-disc list-inside">
          <li>Preservation of Oral Histories</li>
          <li>Language Protection and Revitalization</li>
          <li>Global Accessibility</li>
        </ul>
      </section>
    </div>
  );
}
