import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-6 text-white">
      <Link to="/">Home</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/coaching">Coaching</Link>
      <Link to="/membership">Membership</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}