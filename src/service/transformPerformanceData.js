export const getKindTranslation = (kind) => {
    const kindTranslations = {
      1: 'cardio',
      2: 'énergie',
      3: 'endurance',
      4: 'force',
      5: 'vitesse',
      6: 'intensité'
    };
    return kindTranslations[kind] || kind;
  };
  
  // Function to transform performance data, Map the kind description to the data
  export const transformPerformanceData = (data) => {
    return data.map(item => ({
      ...item,
      kind: getKindTranslation(item.kind)
    })).reverse(); // Reverse si nécessaire
  };