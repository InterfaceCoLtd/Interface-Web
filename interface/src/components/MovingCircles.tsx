import React, { useEffect, useState } from "react";

const FloatingCircles: React.FC = () => {
  const numCircles = 4;
  const circleDiameter = 40;
  const circleSpeed = 0.5; // Adjust the speed as needed
  const [circleData, setCircleData] = useState(() =>
    Array.from({ length: numCircles }, () => ({
      size: Math.random()*100,
      left: Math.random() * (window.innerWidth - circleDiameter),
      top: Math.random() * window.innerHeight,
      directionX: Math.random() < 0.5 ? 1 : -1,
      directionY: Math.random() < 0.5 ? 1 : -1,
    }))
  );

  useEffect(() => {
    const moveCircles = () => {
      setCircleData((prevData) =>
        prevData.map((circle) => {
          const newLeft = circle.left + circleSpeed * circle.directionX;
          const newTop = circle.top + circleSpeed * circle.directionY;

          // Check for collisions with screen edges
          if (
            newLeft < 0 ||
            newLeft > window.innerWidth - circle.size
          ) {
            circle.directionX *= -1;
          }
          if (newTop < 0 || newTop > window.innerHeight - circle.size) {
            circle.directionY *= -1;
          }

          return {
            ...circle,
            left: newLeft,
            top: newTop,
          };
        })
      );
    };

    const interval = setInterval(moveCircles, 16); // Adjust the interval as needed (60 FPS)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {circleData.map((circle, index) => (
        <div
          key={index}
          style={{
            

opacity: 0.5,
            position: "absolute",
            width: circle.size,
            height: circle.size,
            borderRadius: "50%",
            backgroundColor: "purple",
            left: circle.left,
            top: circle.top,
            zIndex: -1,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingCircles;
