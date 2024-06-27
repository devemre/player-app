import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-700 flex flex-row">
      <div className="p-4 pr-8">
        <p className="text-lg font-bold text-white">Player</p>
      </div>
      <Link
        to="/"
        className="p-4 px-6 text-white hover:bg-slate-300 hover:text-slate-900 transition-all duration-[120ms]"
      >
        <p>Dashboard</p>
      </Link>
      <Link
        to="/login"
        className="p-4 px-6 text-white hover:bg-slate-300 hover:text-slate-900 transition-all duration-[120ms]"
      >
        <p>Login</p>
      </Link>
      <Link
        to="/player"
        className="p-4 px-6 text-white hover:bg-slate-300 hover:text-slate-900 transition-all duration-[120ms]"
      >
        <p>Player</p>
      </Link>
    </div>
  );
};

export default Navbar;
