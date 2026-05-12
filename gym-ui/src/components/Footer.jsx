const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <h2 className="text-3xl font-black uppercase">
          ANYTIME<span className="text-violet-600">  FITNESS</span>
        </h2>

        <div className="flex gap-6 text-zinc-600">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;