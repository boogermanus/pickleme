import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed} from '@angular/core';

type PickleMeState = {
  cups: number;
}

const initialState: PickleMeState = {
  cups: 0,
}

export const PickleMeStore = signalStore(
  withState<PickleMeState>(initialState),
  withComputed((store) => ({
    water: computed(() => store.cups() / 2),
    vinegar: computed(() => store.cups() / 2),
    sugar: computed(() => store.cups() / 4),
    salt: computed(() => store.cups() * 16 / 16)
  })),
  withMethods((store) => ({
    updateCups(cups: number): void {
      if (cups >= 0) {
        patchState(store, {cups: cups});
      }
    }
  }))
);
