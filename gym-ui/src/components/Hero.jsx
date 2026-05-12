import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20 bg-[#f8f5ff]">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50 to-fuchsia-50"></div>

      {/* LOGO PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/6e/Anytime_Fitness_Logo.svg')] bg-repeat bg-[length:140px]"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-20 w-[500px] h-[500px] bg-violet-400/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-fuchsia-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* TAG */}
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-xl px-5 py-3 rounded-full">
            <div className="h-3 w-3 bg-violet-600 rounded-full animate-pulse"></div>

            <p className="uppercase tracking-[4px] text-violet-700 font-bold text-sm">
              #1 PREMIUM FITNESS EXPERIENCE
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-10 text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-zinc-900">
            Train
            <br />

            <span className="bg-gradient-to-r from-violet-700 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
              Smarter.
            </span>

            <br />

            Become
            <br />

            Unstoppable.
          </h1>

          {/* DESC */}
          <p className="mt-8 text-zinc-600 text-xl leading-relaxed max-w-xl">
            Elevate your fitness journey with luxury workout spaces,
            AI-powered training systems, world-class coaches,
            and a premium wellness ecosystem designed for champions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-12">

            <button className="group relative overflow-hidden bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white px-9 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-violet-300 hover:scale-105 transition-all duration-300">

              <span className="relative z-10">
                Start Membership →
              </span>

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>
            </button>

            <button className="bg-white/60 backdrop-blur-2xl border border-white/50 hover:bg-white/80 transition-all px-9 py-5 rounded-2xl font-bold text-lg text-zinc-800 shadow-xl">
              Explore Branches
            </button>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-20">

            {[
              {
                number: "25K+",
                label: "Members",
              },
              {
                number: "120+",
                label: "Equipment",
              },
              {
                number: "24/7",
                label: "Gym Access",
              },
            ].map((item, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-xl"
              >
                <h2 className="text-4xl font-black bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text text-transparent">
                  {item.number}
                </h2>

                <p className="text-zinc-500 mt-2 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* BIG GLOW */}
          <div className="absolute w-[550px] h-[550px] bg-gradient-to-r from-violet-500/30 to-fuchsia-400/30 blur-[120px] rounded-full"></div>

          {/* MAIN IMAGE CARD */}
          <div className="relative bg-white/30 backdrop-blur-3xl border border-white/40 p-5 rounded-[40px] shadow-[0_20px_80px_rgba(124,58,237,0.25)]">

            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
              alt="fitness"
              className="w-full max-w-[520px] rounded-[30px]"
            />

            {/* GLASS OVERLAY */}
            <div className="absolute inset-0 rounded-[40px] border border-white/20"></div>
          </div>

          {/* FLOATING CARD 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-10 -left-10 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 shadow-2xl"
          >
            <p className="text-zinc-500 text-sm">
              Calories Burned
            </p>

            <h2 className="text-5xl font-black mt-2 text-violet-700">
              2450
            </h2>

            <p className="text-zinc-400 mt-1 text-sm">
              This Week
            </p>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-10 -right-10 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 shadow-2xl"
          >
            <p className="text-zinc-500 text-sm">
              Active Time
            </p>

            <h2 className="text-5xl font-black mt-2 text-fuchsia-600">
              18h
            </h2>

            <p className="text-zinc-400 mt-1 text-sm">
              Weekly Progress
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;