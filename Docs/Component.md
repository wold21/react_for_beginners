# Component

## Regular Component

-   A regular component does not implement the shouldComponentUpdate method. It always returns true by default

## Pure Component

-   A pure component on the other hand implements shouldCompontentUpdate with a shallow props and state comparison

## Shallow Comparison (SC)

1. Primitive types
    - a (SC) b returns true if a and b have the same value and are of the same type
      Ex: String 'tazo' (SC) String 'tazo' returns true
2. Complex Types

    - a (SC) b returns true if a and b reference thr exact same object

    ```Javascript
    var a = [1, 2, 3];
    var b = [1, 2, 3];
    var c = a;

    var ab_eq = (a === b); // false
    var ac_eq = (a === c); // true

    // a와 c는 같은 객체이다.
    ```

## Pure Component

-   A pure component implement shouldComponentUpdate with a shallow props and state comparison

> SC of prevState with currentState  
> SC of prevProps with currentProps
>
> Difference? -> Re-render component

## Summary

-   We can create a component by extending the PureComponent class.
-   A PureComponent implements the shouldComponentUpdate lifecyvle method by performing a shallow comparison on the props and state of the component
-   If there is no difference, the component is not re-rendered - perfoemance boost.
-   It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour
-   Never mutate the state. Always return a new object that reflects the new state
