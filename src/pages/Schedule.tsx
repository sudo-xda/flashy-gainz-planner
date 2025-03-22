
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ScheduleDay {
  day: string;
  workout: string;
  time: string;
  type: 'push' | 'pull' | 'legs' | 'cardio' | 'rest';
  note?: string;
}

const schedule: ScheduleDay[] = [
  {
    day: 'Monday',
    workout: 'Push Day (Strength)',
    time: '7:00 AM - 8:15 AM',
    type: 'push',
    note: 'Focus on progressive overload'
  },
  {
    day: 'Tuesday',
    workout: 'Pull Day (Strength)',
    time: '7:00 AM - 8:15 AM',
    type: 'pull',
    note: 'Focus on back thickness'
  },
  {
    day: 'Wednesday',
    workout: 'Legs (Strength)',
    time: '7:00 AM - 8:15 AM',
    type: 'legs',
    note: 'Heavy compound movements'
  },
  {
    day: 'Thursday',
    workout: 'Push Day (Hypertrophy)',
    time: '7:00 AM - 8:00 AM',
    type: 'push',
    note: 'Higher rep ranges, shorter rest'
  },
  {
    day: 'Friday',
    workout: 'Pull Day (Hypertrophy)',
    time: '7:00 AM - 8:00 AM',
    type: 'pull',
    note: 'Focus on mind-muscle connection'
  },
  {
    day: 'Saturday',
    workout: 'Legs (Hypertrophy)',
    time: '7:00 AM - 8:15 AM',
    type: 'legs',
    note: 'Volume focus with more isolation'
  },
  {
    day: 'Sunday',
    workout: 'Active Recovery + Cardio',
    time: '8:00 AM - 8:30 AM',
    type: 'cardio',
    note: 'Low-impact, steady state'
  }
];

const Schedule = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'push': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'pull': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'legs': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300';
      case 'cardio': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'rest': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container max-w-4xl mx-auto px-4 py-8"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold font-display mb-3">Weekly Schedule</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your optimized 6-day PPL routine with strategic cardio for advanced strength gains and body recomposition.
          </p>
        </div>
        
        <div className="space-y-4 mb-8">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-xl bg-card"
            >
              <div className="flex items-center gap-4 mb-3 md:mb-0">
                <div className="flex flex-col items-center justify-center h-12 w-12 bg-primary/10 rounded-lg">
                  <span className="text-xl font-medium">{day.day.slice(0, 2)}</span>
                </div>
                
                <div>
                  <h3 className="font-medium">{day.day}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{day.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(day.type)}`}>
                    {day.type.charAt(0).toUpperCase() + day.type.slice(1)}
                  </span>
                  <h4 className="font-medium">{day.workout}</h4>
                </div>
                
                {day.note && (
                  <p className="text-sm text-muted-foreground">{day.note}</p>
                )}
                
                {day.type !== 'rest' && (
                  <Link to={`/workout/${day.type}`} className="mt-2 md:mt-0">
                    <Button variant="ghost" size="sm" className="gap-1 text-xs">
                      View Workout
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-card border rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <Calendar className="h-10 w-10 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-2">Workout Strategy</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <span className="font-medium">Split:</span>
                  <span className="text-muted-foreground">6-day Push/Pull/Legs with 1 active recovery day</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Focus:</span>
                  <span className="text-muted-foreground">First 3 days emphasize strength, next 3 days emphasize hypertrophy</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Recovery:</span>
                  <span className="text-muted-foreground">Each muscle group gets trained twice per week with 48-72 hours rest between sessions</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Cardio:</span>
                  <span className="text-muted-foreground">Strategic low-impact cardio on rest day, optional 10-minute sessions after workouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;
