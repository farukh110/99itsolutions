import { useState } from 'react';

const useToggle = (init = false) => {
  const [value, setValue] = useState(init);
  return [
    value,
    {
      toggle: (e) => {
        if (e) {
          e.preventDefault();
        }
        setValue((flag) => !flag);
      },
    },
  ];
}

export default useToggle;