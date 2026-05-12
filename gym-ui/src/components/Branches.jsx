const branches = [
  {
    city: "NOIDA",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    city: "GREATER NOIDA",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
    {
    city: "GREATER NOIDA",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
    {
    city: "NOIDA",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  
];

const Branches = () => {
  return (
    <section id="branches" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black text-center uppercase">
          Branches
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-xl"
            >
              <img src={branch.image} className="h-80 w-full object-cover" />

              <div className="p-8">
                <h3 className="text-3xl font-black">{branch.city}</h3>

                <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-full">
                  View Branch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;