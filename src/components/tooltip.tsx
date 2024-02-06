import React, { useState, useRef, useEffect, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
  variant?: "dark" | "primary" | "secondary" | "naked";
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  variant = "dark",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipOffset, setTooltipOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current && tooltipRef.current && isVisible) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const offset = (buttonRect.width - tooltipRect.width) / 2;
        setTooltipOffset(offset);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isVisible]);

  const tooltipClasses = `absolute bottom-full mb-2 whitespace-nowrap px-2 py-1 text-xs font-medium rounded shadow-lg transition-opacity duration-150 ease-in-out bg-gray-700 text-white ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;
  const buttonClasses = `relative ${
    variant !== "naked" ? "p-2 rounded bg-gray-700 text-white" : ""
  }`;

  return (
    <div
      className={buttonClasses}
      ref={buttonRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={tooltipClasses}
          ref={tooltipRef}
          style={{ left: `${tooltipOffset}px` }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
