//"use client" is used to declare a boundary between a Server and Client Component 
//modules. This means that by defining a "use client" in a file, all other modules imported into it, 
//including child components, are considered part of the client bundle.
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
// usePathname is a hook in Next.js that you can use to check the path.
import { usePathname } from 'next/navigation';
// clsx  library introduced in the chapter on CSS styling to conditionally apply class names
import clsx from 'clsx';




// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          // the 'Link' tag used to be an 'a' tag (common link tag in html/React).
          // Using the 'a' tag however would cause the whole dom to refresh and with Next.js
          // We can make is smoother since the layout of the pages is the same we only want
          // to refresh to pages content not the whole page. So we can use Link tag.
          // Now when you click a link, only the content refreshes and not the whole page.
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
