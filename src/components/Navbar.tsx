"use client";

import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { Button } from "@/components/ui/button";
import { Heart, LayoutGrid, Search, ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-white shadow-md fixed top-0 left-0 z-50 flex justify-between items-center lg:gap-5">
      <Link href="/" className="text-xl font-bold">
        threadBare
      </Link>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          <SearchBar />
          <Button className="rounded-none" variant="default">
            Search
          </Button>
        </div>
        <Button variant="outline" size="icon" className="md:hidden">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </div>

      <div className="space-x-1 md:space-x-4">
        <Link href="/products">
          <Button variant="ghost" className="p-2 md:p-4 md:px-3">
            <LayoutGrid className="h-4 w-4 md:hidden" />
            <span className="hidden md:inline text-sm">Browse</span>
            <span className="sr-only md:hidden">Browse</span>
          </Button>
        </Link>

        <Link href="/favorites">
          <Button variant="ghost" className="p-2 md:p-4 md:px-3">
            <Heart className="h-4 w-4 md:hidden" />
            <span className="hidden md:inline text-sm">Favorites</span>
            <span className="sr-only md:hidden">Favorites</span>
          </Button>
        </Link>
        <Link href="/cart">
          <Button variant="ghost" className="p-2 md:p-4 md:px-3">
            <ShoppingCart className="h-4 w-4 md:hidden" />
            <span className="hidden md:inline text-sm">Cart</span>
            <span className="sr-only md:hidden">Cart</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
}
