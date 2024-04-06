import { useEffect, useState } from 'react';

interface LoadingProps {
  handleLoadingDone: () => void;
}

export function Loading({ handleLoadingDone }: LoadingProps) {
  let timer: NodeJS.Timeout;
  const [percentage, setPercentage] = useState(0);
  const updatePercentage = () => {
    timer = setInterval(() => {
      setPercentage((prev) => {
        let newPercentage = prev;
        if (newPercentage >= 70) {
          newPercentage += 5;
        } else {
          newPercentage += 1;
        }
        if (newPercentage >= 100) {
          clearInterval(timer);
        }
        return newPercentage;
      });
    }, 50);
  };
  if (percentage >= 100) {
    setTimeout(() => handleLoadingDone(), 700);
  }
  useEffect(() => {
    updatePercentage();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 mx-20 flex h-screen flex-col items-center justify-center space-x-3 bg-transparent">
      <div className="mb-4 h-3 w-3/5 rounded-full bg-gray-300">
        <div
          className={`h-3 rounded-full bg-primary transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
