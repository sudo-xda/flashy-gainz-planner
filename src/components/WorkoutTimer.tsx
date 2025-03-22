
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface WorkoutTimerProps {
  initialSeconds?: number;
}

const WorkoutTimer = ({ initialSeconds = 0 }: WorkoutTimerProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="workout-timer flex flex-col items-center space-y-3 p-4 rounded-xl border border-primary/20 bg-card">
      <div className="text-3xl font-mono font-bold">{formatTime(seconds)}</div>
      <div className="flex gap-2">
        <Button 
          size="sm" 
          variant="outline" 
          onClick={toggleTimer}
          className="h-9 w-9 p-0"
        >
          {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={resetTimer}
          className="h-9 w-9 p-0"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WorkoutTimer;
