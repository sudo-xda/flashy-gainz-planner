
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkoutCard, { WorkoutCardProps } from '@/components/WorkoutCard';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const workouts: WorkoutCardProps[] = [
  {
    title: 'Push Day',
    description: 'Focus on chest, shoulders, and triceps with compound movements and isolation exercises.',
    exercises: 7,
    duration: '60-75 min',
    intensity: 'High',
    type: 'push',
    day: 1
  },
  {
    title: 'Pull Day',
    description: 'Target your back, biceps, and rear delts with rows, pull-ups, and curls.',
    exercises: 6,
    duration: '60-70 min',
    intensity: 'High',
    type: 'pull',
    day: 2
  },
  {
    title: 'Leg Day',
    description: 'Build strength and size in your quads, hamstrings, glutes, and calves.',
    exercises: 6,
    duration: '65-75 min',
    intensity: 'High',
    type: 'legs',
    day: 3
  },
  {
    title: 'Push Day',
    description: 'Hypertrophy-focused push workout with higher rep ranges and shorter rest periods.',
    exercises: 7,
    duration: '55-65 min',
    intensity: 'Medium',
    type: 'push',
    day: 4
  },
  {
    title: 'Pull Day',
    description: 'Volume-oriented back and biceps workout with focus on muscle mind connection.',
    exercises: 6,
    duration: '55-65 min',
    intensity: 'Medium',
    type: 'pull',
    day: 5
  },
  {
    title: 'Leg Day',
    description: 'Higher volume leg training session with a focus on hypertrophy and conditioning.',
    exercises: 7,
    duration: '60-70 min',
    intensity: 'Medium',
    type: 'legs',
    day: 6
  },
  {
    title: 'Cardio',
    description: 'Strategic cardio sessions to improve conditioning without interfering with strength gains.',
    exercises: 4,
    duration: '20-30 min',
    intensity: 'Low',
    type: 'cardio',
    day: 7
  },
];

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-3">
              Your Weekly Routine
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow this 6-day Push-Pull-Legs split with a strategic cardio day to maximize strength gains 
              while improving body composition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workouts.map((workout, index) => (
              <WorkoutCard
                key={`${workout.type}-${workout.day}`}
                {...workout}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/schedule">
              <Button className="gap-1 group">
                View Complete Schedule
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
      
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1.5">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by <span className="font-medium">user123</span> | 
            &copy; {new Date().getFullYear()} MyWorkout Plan. All rights reserved.
          </p>
        </div>
      </footer>
      
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  );
};

export default Index;
