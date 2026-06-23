export default function Header() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-14 rounded-t-3xl border-b border-gray-100">
      {/* Top-Left decorative circles */}
      <div className="absolute top-0 left-0 pointer-events-none w-full h-full">
        {/* Larger circle behind: #8CB5AA */}
        <div className="absolute w-[180px] h-[180px] top-[40px] -left-24 bg-[#8CB5AA] rounded-full z-0" />
        {/* Smaller circle in front: #589486 */}
        <div className="absolute w-[140px] h-[140px] -top-12 -left-6 bg-[#589486] rounded-full z-10" />
      </div>

      {/* Top-Right decorative circles */}
      <div className="absolute top-0 right-0 pointer-events-none w-full h-full">
        {/* Larger circle behind: #8CB5AA */}
        <div className="absolute w-[240px] h-[240px] -top-16 -right-16 bg-[#8CB5AA] rounded-full z-0" />
        {/* Smaller circle in front: #589486 */}
        <div className="absolute w-[140px] h-[140px] top-[80px] -right-12 bg-[#589486] rounded-full z-10" />
      </div>

      <div className="relative z-20 text-center px-4">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#E07055] bg-[#E07055]/5 px-3.5 py-1.5 rounded-full">
          Monthly Dashboard
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#3A7D6C] mt-4 font-black tracking-tight">
          Avery&apos;s Kitchen Report
        </h1>
        <p className="mt-2 text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest">
          May 2026
        </p>
      </div>
    </div>
  );
}
