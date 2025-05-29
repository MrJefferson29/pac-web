import React from 'react';
import HeroSection from '../components/HeroSection';
export default function VirtualMuseums() {
  return (
    <div className="container mx-auto">
      <HeroSection
        title="Virtual Museums"
        subtitle="Explore African heritage through VR and online platforms."
        imageUrl="https://source.unsplash.com/featured/?virtual,reality"
      />
      <section className="space-y-4">
        <p>
          Our virtual museums revolutionize cultural tourism by offering global access to exhibits and artifacts through VR or web. Visitors can immerse themselves in authentic experiences without traveling. fileciteturn1file1
        </p>
        <ul className="list-disc list-inside">
          <li>Tourism Revolution</li>
          <li>Economic Opportunities</li>
          <li>Inclusive Access</li>
        </ul>
      </section>
    </div>
  );
}
