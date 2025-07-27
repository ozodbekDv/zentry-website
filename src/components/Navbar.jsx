import React, { useRef } from "react";

function Navbar() {
  const navContainerRef = useRef(null);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute otp-1.5 w-full -translate-y-1/2">
        <nav className="flex size-full items-center"></nav>
      </header>
    </div>
  );
}

export default React.memo(Navbar);
