import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-darker py-6 text-center border-t-4 border-black text-xs md:text-sm text-gray-400 font-bold">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-brand-yellow font-stumble text-lg">
            UNNESBLOK
          </span>
          <span>© {new Date().getFullYear()} UNNES Roblox Community.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <a
            href="mailto:unnesblok@gmail.com"
            className="hover:text-brand-yellow transition-colors"
          >
            Email
          </a>
          <a
            href="https://instagram.com/unnesblok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-yellow transition-colors"
          >
            Instagram
          </a>
          <Link
            href="/store"
            className="hover:text-brand-yellow transition-colors"
          >
            Toko
          </Link>
        </div>
      </div>
    </footer>
  );
}