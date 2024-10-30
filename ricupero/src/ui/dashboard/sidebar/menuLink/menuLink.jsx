import Link from 'next/link';
import { ReactNode } from 'react';



const MenuLink = ({ item }) => {
  return (
    <li>
      <Link href={item.path} legacyBehavior>
        <a className="flex items-center p-2 hover:bg-gray-100 text-gray-900">
          <span className="text-lg">{item.icon}</span>
          <span className="ml-2">{item.title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuLink;
