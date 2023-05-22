import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    data: [],
  },
  reducers: {},
});

export default testSlice.reducer;
