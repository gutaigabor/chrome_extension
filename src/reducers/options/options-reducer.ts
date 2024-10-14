import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLATE } from '../../constants/sizes';

export type OptionsState = {
  colorScheme: string
};

const initialState : OptionsState = {
  colorScheme: SLATE
};

const slice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setColorScheme: (
      state,
      { payload: colorScheme }: PayloadAction<string>
    ) => {
      state.colorScheme = colorScheme;
    },
  }
});

export const { setColorScheme } = slice.actions;

export default slice.reducer;
