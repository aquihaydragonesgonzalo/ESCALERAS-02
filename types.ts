export type WorkoutStatus = 'idle' | 'running' | 'paused' | 'finished';

export interface WorkoutStats {
  flights: number;
  twoStepSeries: number;
  startTime: number | null;
  endTime: number | null;
  elapsedTime: number; // in milliseconds
}

export const STEPS_PER_FLIGHT = 31;
