

import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-6">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/30 rounded-3xl px-8 py-4 shadow-xl flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          <img
            src="D:\My AI Project\ANYTIME FITNESS\image.png"
            
            className="w-14"
          />

          <h1 className="text-3xl font-black uppercase leading-none">
            ANYTIME
            <br />
               FITNESS
          </h1>
        </div>

        
        <nav className="hidden lg:flex gap-10 font-semibold">
          <a href="#">Home</a>
          <a href="#branches">Branches</a>
          <a href="#pricing">Membership</a>
          <a href="#trainers">Trainers</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        
        <div className="hidden lg:flex items-center gap-4">
          <button className="border border-violet-300 px-6 py-3 rounded-2xl font-semibold text-violet-700">
            Login
          </button>

          <button className="bg-violet-600 hover:bg-violet-500 transition-all text-white px-6 py-3 rounded-2xl font-semibold shadow-xl shadow-violet-300">
            Join Now
          </button>
        </div>

        
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </div>

      
      {open && (
        <div className="max-w-7xl mx-auto mt-4 bg-white/80 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 flex flex-col gap-5 font-semibold">
          <a href="#">Home</a>
          <a href="#branches">Branches</a>
          <a href="#pricing">Membership</a>
          <a href="#trainers">Trainers</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;