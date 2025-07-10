function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-xl rounded-b-3xl py-6 px-4 flex flex-col items-center text-center space-y-2 sm:space-y-3">
      <p className="text-sm sm:text-base text-amber-300 font-mono tracking-wide uppercase">
        Progress Over Perfection
      </p>
      <h1 className="text-3xl sm:text-5xl font-extrabold font-mono text-amber-400 tracking-wider drop-shadow-lg">
        Get Things Done ✅
      </h1>
      <p className=" text-xs sm:text-lg text-amber-400 font-light italic tracking-wide">
        Plan it. Do it. Mark it off.
      </p>
    </header>
  );
}

export default Header;
