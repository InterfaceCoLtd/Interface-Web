import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface MonthButtonProps {
  month: number;
  
}

const MonthButton: React.FC<MonthButtonProps> = ({ month }) => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <div
      className={`MonthButton ${isSelect}`}
      
    >
      <div>{month}월</div>
    </div>
  );
};
// 근데 너무 어렵다ㅠ
export default MonthButton;
