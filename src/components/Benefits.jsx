
import React from 'react';
import {
  ShoppingBag,
  ShieldCheck,
  Star,
  Headphones,
} from 'lucide-react';

export default function Benefits() {
  const benefitItems = [
    {
      icon: ShoppingBag,
      title: 'Wide Range',
      desc: '100+ Fashion Items',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Products',
      desc: 'Quality Materials & Style',
    },
    {
      icon: Star,
      title: 'Trendy & Modern',
      desc: 'Stay Ahead in Fashion',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      desc: 'Here to Help You',
    },
  ];

  return (
    <section className="benefits-section" aria-label="Shopping benefits">
      <div className="benefits-container">
        {benefitItems.map((item) => {
          const Icon = item.icon;

          return (
            <div className="benefit-item" key={item.title}>
              <div className="benefit-icon">
                <Icon size={26} strokeWidth={1.7} />
              </div>

              <div className="benefit-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
