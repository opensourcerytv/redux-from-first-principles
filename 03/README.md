# Redux from First Principles

## 03 - Mutating the state with dispatch

We use a TypeScript type to define the function signature of the reducer function.

We change the function signature of `createStore` to now take the reducer function.

The use of TypeScript allows us to catch the error that would be caused by the changed function signature before running the test. The type `TReducer` provides us with additional information about both the shape of `createStore` and the reducer function that we need to provide as an argument.

In the `dispatch` we now invoke the reducer, passing in the previous state and the new state. The reducer combines the two, and returns the new state.

In our test we test that mutation of the store works with the `dispatch` method.