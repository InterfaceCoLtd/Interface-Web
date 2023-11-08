import React, { useEffect, useState } from "react";
import circleImage from "./circle.png"; // Import your image file

const FloatingCircles: React.FC = () => {
  const numCircles = 2;
  const circleSpeed = 0.2; // Adjust the speed as needed

  const [circleData, setCircleData] = useState(() =>
    Array.from({ length: numCircles }, () => ({
      size: 0,
      left: 0,
      top: 0,
      directionX: Math.random() < 0.5 ? 1 : -1,
      directionY: Math.random() < 0.5 ? 1 : -1,
    }))
  );

  useEffect(() => {
    circleData[0].size = 720;
    circleData[1].size = 480;

    circleData[0].left = window.innerWidth * 0.6;
    circleData[0].top = window.innerHeight * 0.05;
    circleData[1].left = window.innerWidth * 0.1;
    circleData[1].top = window.innerHeight * 0.4;

    const moveCircles = () => {
      setCircleData((prevData) =>
        prevData.map((circle) => {
          const newLeft = circle.left + circleSpeed * circle.directionX;
          const newTop = circle.top + circleSpeed * circle.directionY;

          // Check for collisions with screen edges
          if (newLeft < 0 || newLeft > window.innerWidth - circle.size) {
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
    <div className="FloatingCircles">
      {circleData.map((circle, index) => (
        <img
          key={index}
          src={process.env.PUBLIC_URL + `/assets/Vector.svg`} // Use your image source
          style={{
            position: "absolute",
            width: circle.size,
            height: circle.size,
            left: circle.left,
            top: circle.top,
            // zIndex: -1,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCircles;
