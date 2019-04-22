import {useState, useCallback} from 'react';

export const useRect = () => {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      console.log('computed >>>', getComputedStyle(node).width);
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
};
