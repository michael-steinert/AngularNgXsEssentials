# Angular NGXS Essentials

* NGXS is a State Management that use the Redux Pattern
* It provides a global immutable Data Store
* Components can select Data from the Store as an Observable then dispatch Actions to mutate the Store
* NGXS produces a circular (one way directed) predictable Flow of Data

* __Redux Pattern:__
	* Actions have to be dispatched to a Slice (contains of Reducers) to create a new State by passing the old State and the new Action
	* Selectors allow Components to fetch the global State

![Redux Pattern](https://user-images.githubusercontent.com/107997244/175012634-a1fb9a0f-24b8-4864-9896-3cfd9235c8aa.png)
