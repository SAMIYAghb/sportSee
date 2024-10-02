export const transformDailyActivityData = (sessions) => {
    return sessions.map((session, index) => ({
      day: index + 1,
      weights: session.kilogram,
      calories: session.calories,
    }));
  };