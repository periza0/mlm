export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24">
      {/* Background Circles */}
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-[32px] border border-white/30 bg-white/15 backdrop-blur-xl p-10 md:p-14 shadow-xl">
          <h1 className="mb-8 text-center text-5xl font-bold text-[#0b3046]">
            About Us
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-[#18344a]">
            <span className="font-semibold">
              MLM (Mohan Lal Memorial) Sports Club
            </span>{" "}
            is a premier sports and fitness destination dedicated to providing
            world-class facilities for athletes and fitness enthusiasts.
          </p>

          <div className="space-y-6 text-[#18344a]">
            <div>
              <h3 className="font-semibold text-xl text-[#0b3046]">
                Premium Badminton Courts
              </h3>
              <p>
                4 premium synthetic badminton courts with wooden subflooring
                designed for enhanced comfort, performance, and injury
                prevention.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-[#0b3046]">
                Running Track & Training Areas
              </h3>
              <p>
                Dedicated spaces for fitness training, conditioning, endurance
                building, and athletic development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-[#0b3046]">
                Juice Bar
              </h3>
              <p>
                Fresh juices, healthy refreshments, and recovery drinks to keep
                athletes energized throughout the day.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-[#0b3046]">
                Sports Equipment Shop
              </h3>
              <p>
                Quality badminton gear from Yonex, accessories, apparel, and sports
                essentials available under one roof.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-[#0b3046]">
              Fuel Your Passion.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}