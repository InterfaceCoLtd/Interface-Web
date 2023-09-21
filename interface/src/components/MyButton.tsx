import React from "react";

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <button className="MyButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
