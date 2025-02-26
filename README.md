# StateCraft

StateCraft is a powerful and intuitive tool designed to streamline state management using Redux Toolkit. It simplifies the process of creating, managing, and optimizing Redux slices for scalable applications.

## Installation

```sh
npm install statecraft
```

or

```sh
yarn add statecraft
```

## Usage

```javascript
import { createSlice } from 'statecraft';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

