import { useEffect } from 'react';

const useEventListener = (event, handler, referencedElement) => {
  // effect for binding event handler to the element
  useEffect(() => {
    const element = referencedElement?.current || window;

    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    // bind event to the element
    element.addEventListener(event, handler);

    return () => element.removeEventListener(event, handler);
  }, [referencedElement, event, handler]);

  return;
};

export default useEventListener;