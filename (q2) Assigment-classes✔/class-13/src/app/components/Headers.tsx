"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const { userId, isLoaded } = useAuth();
  const pathname = usePathname();

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <header className="p-5 flex justify-between items-center bg-white shadow-sm">
      <div className="w-12 h-12">
        <Link href="/">
          <Image src="/log.png" alt="Medical Card Logo" width={48} height={48} />
        </Link>
      </div>
      <nav className="flex items-center space-x-8">
        {!userId && (
          <>
            <Link href="/sign-in" className="text-black hover:text-gray-700">
              Sign In
            </Link>
            <Link href="/sign-up" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Register
            </Link>
          </>
        )}
        {userId && (
          <>
            {pathname === '/dashboard' ? (
                <Link href="/profile" className="text-white bg-green-500 px-3 py-2 rounded-md hover:text-gray-700">
                Profile
              </Link>
           
            ) : (
              <Link href="/dashboard" className="text-white bg-green-500 px-3 py-2 rounded-md hover:text-gray-700">
            Dashboard
          </Link>
            )}
            
            <div className="ml-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;