"use client";

import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export function BtnGoToUp() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 64) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showTopBtn ? (
    <div className="fixed bg-gray-100 right-10 drop-shadow-md rounded-lg bottom-10 cursor-pointer">
      <AiOutlineArrowUp onClick={goToTop} className={"text-5xl"} />
    </div>
  ) : null;
}
