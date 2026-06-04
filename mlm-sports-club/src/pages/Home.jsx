import logo from "../assets/logo1.png";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#f8f9fc]" />

      {/* Large Rings */}
      <div className="absolute top-[5%] left-[10%] md:left-[20%] h-[220px] w-[220px] md:h-[420px] md:w-[420px] rounded-full border-[30px] md:border-[55px] border-blue-500/15 blur-[20px]" />

      <div className="absolute top-[25%] left-[15%] md:left-[30%] h-[280px] w-[280px] md:h-[520px] md:w-[520px] rounded-full border-[35px] md:border-[65px] border-blue-600/20 blur-[25px]" />

      <div className="absolute top-[5%] left-[45%] h-[120px] w-[120px] md:h-[220px] md:w-[220px] rounded-full border-[20px] md:border-[45px] border-blue-400/15 blur-[15px]" />

      <div className="absolute bottom-[5%] right-[0%] md:right-[5%] h-[180px] w-[180px] md:h-[350px] md:w-[350px] rounded-full border-[25px] md:border-[50px] border-blue-500/10 blur-[20px]" />

      <div className="absolute top-[10%] right-[-10%] md:right-[-5%] h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full border-[20px] md:border-[40px] border-blue-400/10 blur-[15px]" />

      <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 h-[250px] w-[250px] md:h-[500px] md:w-[500px] rounded-full border-[20px] md:border-[40px] border-blue-400/20 blur-md" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <img
          src={logo}
          alt="MLM Sports Club"
          className="w-[180px] md:w-[260px] lg:w-[320px]"
        />

        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-[#0b3046]">
          MLM Sports Club
        </h1>

      </div>

    </section>
  );
}