import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <section className="p-4 flex h-screen items-center justify-center">
      <div className="text-center items-center flex flex-col text-2xl py-8 gap-5">
        <h1>
          Hi! This page is under construction. We hope jostling this cart will
          make you happy.
        </h1>
        <div className="wiggle-on-hover">
          <ShoppingCart />
        </div>
      </div>
    </section>
  );
}
