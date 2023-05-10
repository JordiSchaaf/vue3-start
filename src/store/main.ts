import { defineStore } from 'pinia';

type State = {
  count: number,
  name: string
}

export const useMainStore = defineStore('main', {
  state: (): State => ({ 
    count: 0, 
    name: 'Pinia' 
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
});
