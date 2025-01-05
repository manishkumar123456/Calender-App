import React from 'react';
import { Calendar } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Calendar App</h1>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}