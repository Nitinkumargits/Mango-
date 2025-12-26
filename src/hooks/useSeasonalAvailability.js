import { useMemo } from 'react';
import { getSeasonStatus, isCurrentlyAvailable } from '../utils/dateUtils';

const useSeasonalAvailability = (seasonMonths) => {
  return useMemo(() => {
    if (!seasonMonths || seasonMonths.length === 0) {
      return {
        status: 'out-of-season',
        isAvailable: false,
      };
    }

    const status = getSeasonStatus(seasonMonths);
    const isAvailable = isCurrentlyAvailable(seasonMonths);

    return {
      status,
      isAvailable,
    };
  }, [seasonMonths]);
};

export default useSeasonalAvailability;

