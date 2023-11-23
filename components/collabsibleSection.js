import React, { useState } from 'react';
import Link from 'next/link';

const CollapsibleSection = ({ title, links, additionalClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Generate the class name
  const className = `${title.toLowerCase().replace(' ', '-')} ${additionalClass || ''}`;

  return (
    <div className={className}>
      <h3 onClick={toggleOpen}>{title}</h3>
      <ul style={{ maxHeight: isOpen ? '600px' : '0', transition: 'max-height 0.3s ease-out', overflow: 'hidden' }}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollapsibleSection;
