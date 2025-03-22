
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Dumbbell, Flame, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface WorkoutCardProps {
  title: string;
  description: string;
  exercises: number;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  type: 'push' | 'pull' | 'legs' | 'cardio';
  day: number;
  imageSrc?: string;
}

const WorkoutCard = ({
  title,
  description,
  exercises,
  duration,
  intensity,
  type,
  day,
  imageSrc
}: WorkoutCardProps) => {
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Low': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'High': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'push':
      case 'pull':
      case 'legs':
        return <Dumbbell className="h-10 w-10 text-primary" />;
      case 'cardio':
        return <Flame className="h-10 w-10 text-primary" />;
      default:
        return <Dumbbell className="h-10 w-10 text-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="workout-card"
    >
      {/* Day indicator */}
      <div className="absolute top-3 right-3 flex items-center justify-center h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-medium">
        {day}
      </div>

      <div className="flex flex-col h-full">
        <div className="mb-4 flex items-center gap-3">
          {getTypeIcon(type)}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/50">
            <Dumbbell className="h-4 w-4 mb-1 text-muted-foreground" />
            <span className="text-sm font-medium">{exercises}</span>
            <span className="text-xs text-muted-foreground">Exercises</span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/50">
            <Clock className="h-4 w-4 mb-1 text-muted-foreground" />
            <span className="text-sm font-medium">{duration}</span>
            <span className="text-xs text-muted-foreground">Duration</span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/50">
            <Flame className="h-4 w-4 mb-1 text-muted-foreground" />
            <div className={`text-xs px-2 py-0.5 rounded-full mt-1 ${getIntensityColor(intensity)}`}>
              {intensity}
            </div>
          </div>
        </div>
        
        <Link to={`/workout/${type}`}>
          <Button variant="outline" className="w-full gap-1 group">
            Start Workout
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default WorkoutCard;
