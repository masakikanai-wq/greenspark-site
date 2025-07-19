'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-greenspark-green">
              GreenSpark Solutions
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="relative group">
                <button className="text-gray-600 hover:text-greenspark-green px-3 py-2 text-sm font-medium flex items-center">
                  会社案内
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link href="/company/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      会社概要
                    </Link>
                    <Link href="/company/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      チーム
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-600 hover:text-greenspark-green px-3 py-2 text-sm font-medium flex items-center">
                  サービス
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link href="/service/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      コンサルティング
                    </Link>
                    <Link href="/service/audit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      省エネ診断
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/cases" className="text-gray-600 hover:text-greenspark-green px-3 py-2 text-sm font-medium">
                導入事例
              </Link>
              <Link href="/contact" className="bg-greenspark-green text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-greenspark-green p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close button */}
          <div className="flex justify-end p-4 border-b border-gray-200">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-greenspark-green p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-4 pt-4 pb-3 space-y-1 h-full overflow-y-auto">
            <div className="py-2">
              <div className="text-gray-800 font-medium text-sm px-3 py-2">会社案内</div>
              <Link
                href="/company/about"
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                会社概要
              </Link>
              <Link
                href="/company/team"
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                チーム
              </Link>
            </div>
            <div className="py-2">
              <div className="text-gray-800 font-medium text-sm px-3 py-2">サービス</div>
              <Link
                href="/service/consulting"
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                コンサルティング
              </Link>
              <Link
                href="/service/audit"
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                省エネ診断
              </Link>
            </div>
            <Link
              href="/cases"
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              導入事例
            </Link>
            <Link
              href="/contact"
              className="block mx-3 my-2 bg-greenspark-green text-white px-3 py-2 rounded-md text-sm font-medium text-center hover:bg-opacity-90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
}