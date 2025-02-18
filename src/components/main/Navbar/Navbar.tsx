'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const navItems = ['Home', 'About', 'Services', 'Join Our Team', 'Contact'];

  return (
    <nav className="flex sticky items-center justify-between p-3 md:px-6 max-w-[1900px] mx-auto shadow-md bg-white w-full fixed top-0 z-50">
      {/* Left - Logo and Text */}
      <div className="flex items-center gap-2">
        <Image 
          src="/images/logo2.png" 
          alt="Logo" 
          width={40} 
          height={40} 
          className="md:w-[65px] contrast-200 transition-transform duration-200 hover:scale-110" 
        />
        <span className="font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md">
          Behavior Analysis & <br /> Therapy Partners
        </span>
      </div>

      {/* Center - Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => {
          const linkPath = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`;
          const isActive = pathname === linkPath;
          return (
            <Link key={item} href={linkPath}>
              <Button variant="ghost" className="relative group px-3 py-2">
                <span className={`transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'}`}>
                  {item}
                </span>
                {/* Underline effect */}
                <span 
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-600 transform transition-transform duration-300 origin-left 
                  ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Right - Phone & Consult Button */}
      <div className="hidden md:flex items-center gap-4">
        <div className="text-sm text-gray-600">
          Call us at: <span className="font-semibold text-blue-600">610-664-6200</span>
        </div>
        <Button 
          variant="default" 
          className="relative group overflow-hidden rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <span className="relative z-10">Consult Now</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={32} className="text-gray-700" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col gap-6 p-6">
          {navItems.map((item) => {
            const linkPath = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`;
            const isActive = pathname === linkPath;
            return (
              <Link key={item} href={linkPath}>
                <Button variant="ghost" className="relative group w-full text-left text-lg px-3 py-2">
                  <span className={`transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-600'}`}>
                    {item}
                  </span>
                  {/* Underline effect */}
                  <span 
                    className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-600 transform transition-transform duration-300 origin-left 
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Button>
              </Link>
            );
          })}
          <div className="text-gray-600 text-center mt-4">
            Call us at: <span className="font-semibold text-blue-600">610-664-6200</span>
          </div>
          <Button 
          variant="default" 
          className="relative group overflow-hidden rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <span className="relative z-10">Consult Now</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
