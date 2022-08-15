# React

## LifeCycle

### Methods

-   Mounting
    -   When an instance of a component is being created and inserted into the DOM
        > constructor
        > static getDerivedStateFromProps
        > render and componentDidMount
-   Updating
    -   When a component is being re-rendererd as a result of changes to either its props or state
        > static getDerivedStateFromProps
        > shouldComponentUpdate
        > render
        > getSnapshotBeforeUpdate and componentDidMount
-   Unmounting
    -   When a component is being removed from the DOM
        > componentWillUnmount
-   Error Handling
    -   When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
        > static getDerivedStateFromError and componentDidCatch
