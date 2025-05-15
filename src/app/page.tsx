"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Input } from "@/components/ui/input";
import { ProductAccordion } from "@/components/ProductAccordion";
import { AlertDialogDemo } from "@/components/Alert";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <main className="p-8 space-y-8 mt-20">
      {/* Navbar */}
      <section className="fixed top-0 z-50 bg-white flex justify-center items-center w-full">
        <div className="flex w-full max-w-4xl items-center px-4 py-2 mx-auto">
          {/* Search input and button */}
          <div className="flex flex-1 items-center space-x-2">
            <Input
              type="search"
              placeholder="Search"
              className="w-full shadow"
            />
            <Button type="submit">Search</Button>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline">Sign Up</Button>
            <Button onClick={handleClick}>Log In</Button>
          </div>
        </div>
      </section>

      {/*Carousel */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <ProductCarousel
          images={[
            "/images/coat-1.jpg",
            "/images/sneakers-1.jpg",
            "/images/sweater-1.jpg",
            "/images/sweater-2.jpeg",
            "/images/trousers-1.jpg",
          ]}
        ></ProductCarousel>
      </section>

      {/*Accordion */}
      <section className="w-6/12 mx-auto flex justify-center items-center">
        <p>No.</p>
      </section>

      {/* Alert Dialog */}
      <section className="text-center">
        <AlertDialogDemo />
      </section>

      <section className="text-center text-blue-600">
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
        <p>Blah</p>
      </section>
    </main>
  );
}
