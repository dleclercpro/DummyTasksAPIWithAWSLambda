import { randomUUID } from 'crypto';

export type Task = { id: string; title: string; done: boolean };

// Dummy task titles for generating test data
const dummyTitles = [
  'Complete project documentation',
  'Review pull requests',
  'Update dependencies',
  'Write unit tests',
  'Fix bug in authentication',
  'Optimize database queries',
  'Design new feature mockup',
  'Deploy to staging environment',
  'Code review for team member',
  'Update API documentation',
  'Refactor legacy code',
  'Setup CI/CD pipeline',
  'Implement error handling',
  'Add logging and monitoring',
  'Performance testing',
];

/**
 * Generate a single random dummy task
 */
export const generateDummyTask = (): Task => {
  const randomTitle = dummyTitles[Math.floor(Math.random() * dummyTitles.length)];
  const randomDone = Math.random() > 0.5;
  return {
    id: randomUUID(),
    title: randomTitle,
    done: randomDone,
  };
};

/**
 * Generate multiple dummy tasks
 * @param count Number of tasks to generate (default: 5, min: 1, max: 50)
 * @returns Array of generated dummy tasks
 */
export const generateDummyTasks = (count: number = 5): Task[] => {
  const numTasks = Math.min(Math.max(1, count), 50); // Limit between 1 and 50
  const dummyTasks: Task[] = [];
  
  for (let i = 0; i < numTasks; i++) {
    dummyTasks.push(generateDummyTask());
  }
  
  return dummyTasks;
};

