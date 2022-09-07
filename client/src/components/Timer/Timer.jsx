import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev <=0 ) return 50;
        return prev - 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-2 font-bold text-end mr-10 text-xl" >
      Main update via: {time/10}0
    </div>
  );
};

export default Timer;
