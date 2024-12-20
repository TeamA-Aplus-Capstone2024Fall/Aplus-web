const calculateRemainDay = (date: string | null, alert: number) => {
  if (date) {
    const DAY = 24 * 60 * 60 * 1000;
    const today = new Date();
    const targetDay = new Date(date);
    today.setHours(0, 0, 0, 0);
    targetDay.setHours(0, 0, 0, 0);
    const gap = Math.floor((targetDay.getTime() - today.getTime()) / DAY);

    if (gap <= alert && gap >= 0) {
      switch (gap) {
        case 0:
          return { isAlert: true, day: "Today" };
        case 1:
          return { isAlert: true, day: "Tomorrow" };
        default:
          return { isAlert: true, day: `${gap} days left` };
      }
    }

    return { isAlert: false, day: `${gap} days left` };
  }

  return { isAlert: false, day: "idk" };
};

export default calculateRemainDay;
