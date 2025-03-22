
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-8 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border/50 text-sm font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Clock className="h-3.5 w-3.5" />
          <span>7:00 AM - 8:30 AM</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-gradient">GENZ</span> Workout Plan
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
          A 6-Day PPL Routine designed for advanced lifters focusing on strength gains 
          and body recomposition with strategic cardio integration.
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center items-center mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/workout/push">
            <Button size="lg" className="gap-1 px-6">
              Start Today
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          
          <Link to="/schedule">
            <Button size="lg" variant="outline" className="gap-1 px-6">
              <Calendar className="h-4 w-4" />
              View Schedule
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Animated workout types badges */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-lg">
        <div className="flex flex-wrap justify-center gap-3">
          {['Push', 'Pull', 'Legs', 'Rest', 'Cardio', 'Strength'].map((type, i) => (
            <span 
              key={type}
              className="px-4 py-1.5 rounded-full bg-background border border-border text-sm font-medium animate-pulse-slow"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
