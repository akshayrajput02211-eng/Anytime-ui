import { Dumbbell, Crown, Users, MapPin } from "lucide-react";

const data = [
  {
    icon: <Dumbbell />,
    title: "Elite Equipment",
  },
  {
    icon: <Users />,
    title: "Expert Trainers",
  },
  {
    icon: <MapPin />,
    title: "Premium Locations",
  },
  {
    icon: <Crown />,
    title: "Luxury Experience",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-[30px] p-8 shadow-xl"
          >
            <div className="text-violet-600 mb-5">{item.icon}</div>

            <h3 className="text-2xl font-bold">{item.title}</h3>

            <p className="text-zinc-600 mt-4">
              Premium gym environment with futuristic fitness experience.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;