"use client";

import { useState, useEffect } from "react";

export const useToggleAside = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1025);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAside = () => setIsOpen((prev) => !prev);

  return { isOpen, toggleAside };
};
