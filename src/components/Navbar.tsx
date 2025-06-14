"use client";

import Link from "next/link";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-md fixed top-0 left-0 z-50 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        threadBare
      </Link>
      <SearchBar />
      <div className="space-x-4">
        <Link href="/products" className="text-sm hover:underline">
          Browse
        </Link>
        <Link href="/favorites" className="text-sm hover:underline">
          Favorites
        </Link>
        <Link href="/cart" className="text-sm hover:underline">
          Cart
        </Link>
      </div>
    </nav>
  );
}
