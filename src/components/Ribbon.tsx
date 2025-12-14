"use client";

import { useEffect, useState } from "react";

interface RibbonProps {
  messages: string[];
  className?: string;
}

const messageSeparator = " 🎉❄️ ";

export default function Ribbon({ messages = [] }: RibbonProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    localStorage.removeItem("ribbonDismissed");

    const dismissed = localStorage.getItem("ribbonDismissed");
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("ribbonDismissed", "true");
  };

  const singlePassContent = messages.join(messageSeparator);
  const passContent = singlePassContent + messageSeparator;
  if (!isVisible || messages.length === 0) {
    return <div className="h-[70px]"></div>;
  }

  return (
    <div className="relative overflow-hidden bg-red-800 text-white py-2 px-4 z-10">
      <div className="animate-ribbon flex items-center py-2 px-4 whitespace-nowrap w-max">
        <span className="flex shrink-0">{passContent}</span>
        <span className="flex shrink-0">{passContent}</span>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute top-1 right-2 p-2 text-white hover:bg-gray-300 cursor-pointer"
        aria-label="Dismiss Ribbon"
      >
        &times;
      </button>
    </div>
  );
}
