import { useEffect, useState } from 'react';

export const useDebounce = (value: any, debounceTimeMs: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTimeMs);

    return () => {
      clearTimeout(handler);
    };
  }, [debounceTimeMs, value]);

  return debouncedValue;
};
