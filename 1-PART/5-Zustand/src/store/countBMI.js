import { create } from "zustand";

const useBmiStore = create((set) => ({
  weight: "",
  height: "",
  bmi: 0,

  setWeight: (weight) => set({ weight }),
  setHeight: (height) => set({ height }),

  calculateBMI: (weight, height) => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum) {
      set({ bmi: 0 });
      return;
    }

    const bmi = (weightNum / (heightNum * heightNum)).toFixed(2);

    set({ bmi });
  },
}));

export default useBmiStore;