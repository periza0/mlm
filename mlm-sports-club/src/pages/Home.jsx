import logo from "../assets/logo1.png";

export default function Home() {
  return (
    
    <section className="relative min-h-screen overflow-hidden bg-[#f6f7fb]">
      <div className="absolute inset-0 bg-[#f8f9fc]" />
      <div className="absolute top-[5%] left-[20%] h-[420px] w-[420px] rounded-full border-[55px] border-blue-500/15 blur-[25px]" />

     <div className="absolute top-[25%] left-[30%] h-[520px] w-[520px] rounded-full border-[65px] border-blue-600/20 blur-[25px]" />

     <div className="absolute top-[0%] left-[35%] h-[220px] w-[220px] rounded-full border-[45px] border-blue-400/15 blur-[20px]" />

      <div className="absolute bottom-[5%] right-[5%] h-[350px] w-[350px] rounded-full border-[50px] border-blue-500/10 blur-[20px]" />

     <div className="absolute top-[10%] right-[-5%] h-[300px] w-[300px] rounded-full border-[40px] border-blue-400/10 blur-[15px]" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full border-[40px] border-blue-400/20 blur-md" />
      {/* Center Logo */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <img
          src={logo}
          alt="MLM Sports Club"
          className="w-[200px] md:w-[300px]"
        />
      </div>

    </section>
  );
}