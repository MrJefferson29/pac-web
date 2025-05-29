import React from 'react';
import { Link } from 'react-router-dom';
export default function Projects() {
  const items = [
    { title: 'PAC AI', path: '/projects/pac-ai' },
    { title: 'Digital Centers', path: '/projects/digital-centers' },
    { title: 'Virtual Museums', path: '/projects/virtual-museums' },
    { title: 'Apps Hosting', path: '/projects/apps-hosting' },
    { title: 'Documentaries', path: '/projects/documentaries' },
    { title: 'Festivals', path: '/projects/festivals' },
    { title: 'E-commerce', path: '/projects/ecommerce' },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <Link key={item.title} to={item.path} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">Learn more about our {item.title} initiative.</p>
        </Link>
      ))}
    </div>
  );
}