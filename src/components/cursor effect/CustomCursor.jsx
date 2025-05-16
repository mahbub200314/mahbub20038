// src/components/CustomCursor.js
import { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    ></div>
  );
};

export default CustomCursor;
