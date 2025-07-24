import { useEffect, useState } from "react";

const STORAGE_EVENT = "session-storage-updated";

function deepEqual<T>(a: T, b: T): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function useSessionStorage<T>(
  key: string,
  initialValue: T | (() => T),
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] {
  const getStoredValue = (): T | undefined => {
    const stored = sessionStorage.getItem(key);
    if (stored !== null) {
      try {
        return JSON.parse(stored) as T;
      } catch {
        // ignore invalid JSON
      }
    }
    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  };

  const [value, setValue] = useState<T | undefined>(() => getStoredValue());

  useEffect(() => {
    if (value === undefined) {
      sessionStorage.removeItem(key);
      window.dispatchEvent(
        new CustomEvent(STORAGE_EVENT, {
          detail: { key, value: undefined },
        }),
      );
    } else {
      try {
        const json = JSON.stringify(value);
        sessionStorage.setItem(key, json);
        window.dispatchEvent(
          new CustomEvent(STORAGE_EVENT, {
            detail: { key, value },
          }),
        );
      } catch (e) {
        console.warn(`Unable to store sessionStorage item: ${key}`, e);
      }
    }
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (event: Event) => {
      const { detail } = event as CustomEvent<{
        key: string;
        value: T | undefined;
      }>;
      if (detail.key === key && !deepEqual(detail.value, value)) {
        setValue(detail.value);
      }
    };

    window.addEventListener(STORAGE_EVENT, handleStorageChange);
    return () => window.removeEventListener(STORAGE_EVENT, handleStorageChange);
  }, [key, value]);

  return [value, setValue];
}
