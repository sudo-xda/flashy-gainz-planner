
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  rest: string;
  notes?: string;
}

export interface WorkoutDayProps {
  title: string;
  type: 'push' | 'pull' | 'legs' | 'cardio';
  description: string;
  exercises: Exercise[];
}

const WorkoutDay = ({
  title,
  type,
  description,
  exercises
}: WorkoutDayProps) => {
  const [openExercise, setOpenExercise] = useState<string | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const toggleExercise = (id: string) => {
    setOpenExercise(openExercise === id ? null : id);
  };

  const toggleComplete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setCompletedExercises(prev => 
      prev.includes(id) 
        ? prev.filter(exId => exId !== id) 
        : [...prev, id]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="container max-w-3xl mx-auto py-8 px-4 md:px-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold font-display mb-3">{title}</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">{description}</p>
      </div>

      <div className="space-y-4">
        {exercises.map((exercise) => (
          <motion.div 
            key={exercise.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "exercise-item cursor-pointer",
              completedExercises.includes(exercise.id) && "border-green-300 bg-green-50/50 dark:bg-green-900/10"
            )}
            onClick={() => toggleExercise(exercise.id)}
          >
            <div className="flex-1">
              <div className="flex items-start gap-3">
                <button
                  className={cn(
                    "mt-1 h-5 w-5 rounded-full border flex items-center justify-center",
                    completedExercises.includes(exercise.id)
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-muted-foreground"
                  )}
                  onClick={(e) => toggleComplete(e, exercise.id)}
                >
                  {completedExercises.includes(exercise.id) && <Check className="h-3 w-3" />}
                </button>
                
                <div>
                  <h3 className={cn(
                    "text-lg font-medium",
                    completedExercises.includes(exercise.id) && "line-through opacity-70"
                  )}>
                    {exercise.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-xs px-2 py-1 rounded bg-secondary/80 text-secondary-foreground">
                      {exercise.sets} sets
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary/80 text-secondary-foreground">
                      {exercise.reps}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary/80 text-secondary-foreground">
                      {exercise.rest} rest
                    </span>
                  </div>
                </div>
              </div>
              
              <AnimatePresence>
                {openExercise === exercise.id && exercise.notes && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 pl-8 text-sm text-muted-foreground overflow-hidden"
                  >
                    <p>{exercise.notes}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <ChevronDown 
              className={cn(
                "h-5 w-5 text-muted-foreground transition-transform mt-2",
                openExercise === exercise.id && "transform rotate-180"
              )} 
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkoutDay;
