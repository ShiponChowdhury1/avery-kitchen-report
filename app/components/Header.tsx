export default function Header() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-8 rounded-t-3xl border-b border-gray-100">
      {/* Top-Left decorative circles */}
      <div className="absolute top-0 left-0 pointer-events-none w-full h-full">
        {/* Larger circle behind: #8CB5AA */}
        <div className="absolute w-[135px] h-[135px] top-[5px] -left-16 bg-[#8CB5AA] rounded-full z-0" />
        {/* Smaller circle in front: #589486 */}
        <div className="absolute w-[110px] h-[110px] -top-10 left-[5%] bg-[#589486] rounded-full z-10" />
      </div>

      {/* Top-Right decorative circles */}
      <div className="absolute top-0 right-0 pointer-events-none w-full h-full">
        {/* Larger circle behind: #8CB5AA */}
        <div className="absolute w-[140px] h-[140px] -top-8 -right-8 bg-[#8CB5AA] rounded-full z-0" />
        {/* Smaller circle in front: #589486 */}
        <div className="absolute w-[100px] h-[100px] top-[48px] -right-[30px] bg-[#589486] rounded-full z-10" />
      </div>
      <div className="relative z-20 text-center px-4">
        <h1 
          className="text-4xl md:text-5xl text-[#3A7D6C] mt-2 font-normal tracking-tight"
          style={{ fontFamily: "var(--font-roboto), sans-serif" }}
        >
          Avery&rsquo;s Kitchen Report
        </h1>
        <p className="mt-1 text-base md:text-lg font-normal text-[#3A7D6C] opacity-90 tracking-wide">
          May 2026
        </p>
      </div>
    </div>
  );
}
