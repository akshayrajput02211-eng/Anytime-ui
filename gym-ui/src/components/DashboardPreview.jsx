const DashboardPreview = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-[40px] p-10 text-white">
        <h2 className="text-6xl font-black uppercase">
          Smart Dashboard
        </h2>

        <p className="mt-6 text-lg">
          Track workouts, calories, progress, memberships and AI insights.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/20 rounded-3xl p-8">
            <h3 className="text-5xl font-black">98%</h3>
            <p className="mt-3">Fitness Goal</p>
          </div>

          <div className="bg-white/20 rounded-3xl p-8">
            <h3 className="text-5xl font-black">12K</h3>
            <p className="mt-3">Calories Burned</p>
          </div>

          <div className="bg-white/20 rounded-3xl p-8">
            <h3 className="text-5xl font-black">24/7</h3>
            <p className="mt-3">Gym Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;