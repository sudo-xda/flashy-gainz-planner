
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import WorkoutDay, { Exercise, WorkoutDayProps } from '@/components/WorkoutDay';
import { motion } from 'framer-motion';

const workoutData: Record<string, WorkoutDayProps> = {
  push: {
    title: 'Push Day Workout',
    type: 'push',
    description: 'Focus on chest, shoulders, and triceps with compound movements and isolation exercises.',
    exercises: [
      {
        id: 'push-1',
        name: 'Barbell Bench Press',
        sets: 4,
        reps: '6-8 reps',
        rest: '2-3 min',
        notes: 'Focus on controlled eccentric (lowering) portion. Ensure your feet are planted firmly on the ground, and maintain a slight arch in your lower back.'
      },
      {
        id: 'push-2',
        name: 'Incline Dumbbell Press',
        sets: 4,
        reps: '8-10 reps',
        rest: '90-120 sec',
        notes: 'Set bench to 30-45 degree incline. Keep elbows at about 45 degrees from your torso to protect shoulders.'
      },
      {
        id: 'push-3',
        name: 'Seated Overhead Press',
        sets: 3,
        reps: '8-10 reps',
        rest: '90-120 sec',
        notes: 'Keep core tight and avoid excessive arching of the lower back. Press the weight directly overhead, not forward.'
      },
      {
        id: 'push-4',
        name: 'Lateral Raises',
        sets: 3,
        reps: '10-12 reps',
        rest: '60-90 sec',
        notes: 'Keep a slight bend in the elbows and raise arms until parallel with the floor. Avoid using momentum to lift the weights.'
      },
      {
        id: 'push-5',
        name: 'Tricep Dips',
        sets: 3,
        reps: '8-12 reps',
        rest: '60-90 sec',
        notes: 'Lower yourself until elbows are at 90 degrees. If bodyweight is too difficult, use an assisted dip machine.'
      },
      {
        id: 'push-6',
        name: 'Tricep Pushdowns',
        sets: 3,
        reps: '10-12 reps',
        rest: '60 sec',
        notes: 'Keep elbows close to your sides and focus on the contraction at the bottom of the movement.'
      },
      {
        id: 'push-7',
        name: 'Cable Chest Flyes',
        sets: 3,
        reps: '12-15 reps',
        rest: '60 sec',
        notes: 'Focus on the stretch at the start position and the squeeze at the end of the movement.'
      }
    ]
  },
  pull: {
    title: 'Pull Day Workout',
    type: 'pull',
    description: 'Target your back, biceps, and rear delts with rows, pull-ups, and curls.',
    exercises: [
      {
        id: 'pull-1',
        name: 'Pull-Ups / Lat Pulldowns',
        sets: 4,
        reps: '6-10 reps',
        rest: '2 min',
        notes: 'For pull-ups, use a grip slightly wider than shoulder width. If you can\'t do at least 6 strict pull-ups, use lat pulldowns instead.'
      },
      {
        id: 'pull-2',
        name: 'Barbell Rows',
        sets: 4,
        reps: '8-10 reps',
        rest: '90-120 sec',
        notes: 'Maintain a slight bend in your knees and keep your back straight. Pull the bar to your lower chest/upper abs.'
      },
      {
        id: 'pull-3',
        name: 'Seated Cable Rows',
        sets: 3,
        reps: '10-12 reps',
        rest: '90 sec',
        notes: 'Focus on pulling with your elbows, not your hands. Keep your chest up and shoulders back.'
      },
      {
        id: 'pull-4',
        name: 'Face Pulls',
        sets: 3,
        reps: '12-15 reps',
        rest: '60 sec',
        notes: 'Pull the rope towards your face with your elbows high, focusing on external rotation of the shoulders.'
      },
      {
        id: 'pull-5',
        name: 'Barbell or Dumbbell Bicep Curls',
        sets: 3,
        reps: '10-12 reps',
        rest: '60 sec',
        notes: 'Keep your elbows stationary by your sides. Fully extend at the bottom and fully contract at the top.'
      },
      {
        id: 'pull-6',
        name: 'Hammer Curls',
        sets: 3,
        reps: '10-12 reps',
        rest: '60 sec',
        notes: 'Keep palms facing each other throughout the movement. Focus on the brachialis and forearm muscles.'
      }
    ]
  },
  legs: {
    title: 'Leg Day Workout',
    type: 'legs',
    description: 'Build strength and size in your quads, hamstrings, glutes, and calves.',
    exercises: [
      {
        id: 'legs-1',
        name: 'Barbell Back Squats',
        sets: 4,
        reps: '6-8 reps',
        rest: '2-3 min',
        notes: 'Keep your chest up and knees tracking over your toes. Descend until thighs are at least parallel to the floor.'
      },
      {
        id: 'legs-2',
        name: 'Romanian Deadlifts',
        sets: 3,
        reps: '8-10 reps',
        rest: '2 min',
        notes: 'Keep a slight bend in your knees and hinge at the hips. Lower the weight until you feel a stretch in your hamstrings, then drive your hips forward to stand up.'
      },
      {
        id: 'legs-3',
        name: 'Walking Lunges',
        sets: 3,
        reps: '10-12 per leg',
        rest: '90 sec',
        notes: 'Take a big step forward and lower your back knee toward the ground. Push through the front heel to step forward into the next lunge.'
      },
      {
        id: 'legs-4',
        name: 'Leg Press',
        sets: 3,
        reps: '10-12 reps',
        rest: '90 sec',
        notes: 'Position feet at shoulder width. Lower the weight until knees are at 90 degrees, then press back up without locking your knees.'
      },
      {
        id: 'legs-5',
        name: 'Leg Curls',
        sets: 3,
        reps: '10-12 reps',
        rest: '60 sec',
        notes: 'Focus on squeezing your hamstrings at the top of the movement. Avoid using momentum.'
      },
      {
        id: 'legs-6',
        name: 'Standing Calf Raises',
        sets: 4,
        reps: '12-15 reps',
        rest: '60 sec',
        notes: 'Rise up onto your toes as high as possible, then lower your heels below the level of the step for a full stretch.'
      }
    ]
  },
  cardio: {
    title: 'Cardio Session',
    type: 'cardio',
    description: 'Strategic cardio sessions to improve conditioning without interfering with strength gains.',
    exercises: [
      {
        id: 'cardio-1',
        name: 'HIIT Sprints',
        sets: 8,
        reps: '20 sec sprint, 40 sec rest',
        rest: '40 sec',
        notes: 'Perform on treadmill, bike, or outdoor track. Sprint at 85-90% of your max effort, then recover at a very slow pace.'
      },
      {
        id: 'cardio-2',
        name: 'Rowing Machine',
        sets: 1,
        reps: '10 minutes',
        rest: 'N/A',
        notes: 'Maintain a moderate pace (around 24-28 strokes per minute) focusing on proper form. Drive with your legs first, then pull with your arms.'
      },
      {
        id: 'cardio-3',
        name: 'Stair Climber',
        sets: 1,
        reps: '10 minutes',
        rest: 'N/A',
        notes: 'Maintain an upright posture with a slight forward lean. Use a moderate pace that you can maintain for the full duration.'
      },
      {
        id: 'cardio-4',
        name: 'Cool Down Walk',
        sets: 1,
        reps: '5 minutes',
        rest: 'N/A',
        notes: 'Gradually reduce intensity to slowly bring your heart rate down.'
      }
    ]
  }
};

const Workout = () => {
  const { type } = useParams<{ type: string }>();
  
  if (!type || !workoutData[type]) {
    return <Navigate to="/" replace />;
  }
  
  const workout = workoutData[type];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen pt-20"
    >
      <Navbar />
      <WorkoutDay {...workout} />
      
      <footer className="py-8 px-4 border-t mt-8">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1.5">
            <span className="text-xs">&copy; {new Date().getFullYear()} GENZ Workout Plan by user123</span>
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Workout;
