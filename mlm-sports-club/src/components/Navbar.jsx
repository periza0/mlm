import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center pt-6">
      <nav className="flex items-center gap-3 rounded-full border border-white/30 bg-white/20 px-8 py-4 backdrop-blur-xl shadow-lg">
        <Link
          to="/"
          className="rounded-full px-5 py-2 text-slate-700 transition hover:bg-white/40"
        >
          Home
        </Link>

        <Link
          to="/achievements"
          className="rounded-full px-5 py-2 text-slate-700 transition hover:bg-white/40"
        >
          Achievements
        </Link>

        <Link
          to="/coaching"
          className="rounded-full px-5 py-2 text-slate-700 transition hover:bg-white/40"
        >
          Coaching
        </Link>

        <Link
          to="/membership"
          className="rounded-full px-5 py-2 text-slate-700 transition hover:bg-white/40"
        >
          Membership
        </Link>

        <Link
          to="/gallery"
          className="rounded-full px-5 py-2 text-slate-700 transition hover:bg-white/40"
        >
          Gallery
        </Link>

        <Link
          to="/about"
          className="rounded-full px-5 py-2 text-slate-700 transition hover:bg-white/40"
        >
          About Us
        </Link>
      </nav>
    </header>
  );
}