import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 justify-center gap-9 text-sm text-gray-600 flex flex-row">
        <div>
          &copy; {new Date().getFullYear()} threadBare. All rights reserved.
        </div>
        <div>
          <a href="https://github.com/i-najar">
            <Image
              src="/images/footer/github-mark-white.svg"
              alt="github-logo"
              width="30"
              height="30"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ismail-najar/">
            <Image
              src="/images/footer/linkedin-i.svg"
              alt="linkedin-logo"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
