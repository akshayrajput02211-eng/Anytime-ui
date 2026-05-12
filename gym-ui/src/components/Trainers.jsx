const trainers = [
  {
    name: "Pulkit Bhai",
    role: "Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },
    {
    name: "Anshu Bhai",
    role: "Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },
    {
    name: "Raju Bhai",
    role: "Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black text-center uppercase">
          Trainers
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-xl"
            >
              <img
                src={trainer.image}
                className="h-[450px] w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-black">
                  {trainer.name}
                </h3>

                <p className="text-violet-600 mt-2">
                  {trainer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;