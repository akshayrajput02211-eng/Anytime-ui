const plans = [
  {
    name: "Silver",
    price: "₹1499",
  },
  {
    name: "Gold",
    price: "₹2999",
  },
  {
    name: "Elite",
    price: "₹4999",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-black uppercase">
          Membership Plans
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 shadow-xl"
            >
              <h3 className="text-4xl font-black">{plan.name}</h3>

              <div className="text-6xl font-black mt-6">
                {plan.price}
              </div>

              <button className="mt-10 bg-violet-600 text-white w-full py-4 rounded-full">
                Join Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;