# Angular NGXS Essentials

- NGXS is a State Management that use the Redux Pattern
- It provides a global immutable Data Store
- Components can select Data from the Store as an Observable then dispatch Actions to mutate the Store
- NGXS produces a circular (one way directed) predictable Flow of Data

## Redux Pattern

- Actions have to be dispatched to a Slice (contains of Reducers) to create a new State by passing the old State and the new Action
- Selectors allow Components to fetch the global State

![Redux Pattern](https://user-images.githubusercontent.com/107997244/175012634-a1fb9a0f-24b8-4864-9896-3cfd9235c8aa.png)

## Key Components

- By using NgRx the Component has not manage the global State, there a Component dispatches to an Action
- A Component calls a `Dispatcher` to update the global State of the Application

- `Actions` are using `Reducers` to update the State
- A `Reducer` can only change the immutable State by creating a new State
- `Reducers` detect the Changes and store them in a new State

- The global State is stored in the `Store`
- A `Store` is an Object of Data

- A `Selector` can fetch Data from the `Store` and pass them on the `Component`

- Task that need some Time to complete like asynchronous Call are handled by `Effects`
- `Effects` can also listen to all Actions being dispatched from the Components like the `Reducers`
- Unlike `Reducers` that has to be a pure Function intended just to update the State an `Effect` run Side Effects like Loading of Data from an API
- After a `Effect` finished it will dispatch a `Action` either Load of Data was successfully or failure and a `Reducer` will handle this `Action`

## NgRx Lifecycle

![ngrx-lifecycle](https://user-images.githubusercontent.com/29623199/182600107-0ba190b3-6305-4819-91dc-774b03841091.png)
