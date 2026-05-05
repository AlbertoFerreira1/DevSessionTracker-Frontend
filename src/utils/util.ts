export const formatDateOnly = (isoString: string) => {
  return isoString.slice(0, 10);
};

export const getTheMonth = () => {
  const date = new Date();
  return date.toLocaleString("default", {month: "long"});
}

export const getMotivationMessage = (minutes: number): string => {
  if (minutes <= 0) {
    return "No sessions recorded yet. Start your first session!";
  } else if (minutes <= 45) {
    return "Good start! Every minute counts. 💪";
  } else if (minutes <= 120) {
    return "Solid work! You're building a great habit. 🔥";
  } else if (minutes <= 240) {
    return "Impressive! You're putting in serious time. 🚀";
  } else {
    return "Absolute beast mode. Keep it up! 🏆";
  }
};
