export function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} threadBare. All rights reserved.
      </div>
    </footer>
  );
}
