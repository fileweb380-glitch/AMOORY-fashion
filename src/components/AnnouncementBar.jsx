
import React from 'react';
import { Phone, MapPin, Send, Camera } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-container">
        <div className="announcement-info">
          <a
            href="tel:+251949586551"
            className="announcement-item"
            aria-label="Call Amoory Fashion"
          >
            <Phone size={14} />
            <span>+251 9 49 58 65 51</span>
          </a>

          <span className="announcement-divider" aria-hidden="true">
            |
          </span>

          <div className="announcement-item announcement-location">
            <MapPin size={14} />
            <span>Redwa, Sabia, Unit Mall, First Floor</span>
          </div>
        </div>

        <p className="announcement-message">
          "You can't have anything you want in life if you dress for it."
        </p>

        <div className="announcement-socials">
          <a
            href="https://t.me/AmooryFashion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Amoory Fashion on Telegram"
          >
            <Send size={15} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Amoory Fashion on Instagram"
          >
            <Camera size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
