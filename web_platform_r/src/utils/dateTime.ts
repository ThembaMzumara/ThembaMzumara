export const getMidnight = (date: Date = new Date()): Date => {
  const midnight = new Date(date);
  midnight.setHours(24, 0, 0, 0);
  return midnight;
};

export const getTimeUntilMidnight = (): number => {
  const now = new Date();
  const midnight = getMidnight();
  return Math.floor((midnight.getTime() - now.getTime()) / 1000);
};
