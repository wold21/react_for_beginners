# React

## LifeCycle

### Methods

-   Mounting
    -   When an instance of a component is being created and inserted into the DOM
        > constructor
        > static getDerivedStateFromProps
        > render and componentDidMount
-   Updating
    -   When a component is being re-rendered as a result of changes to either its props or state
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

### Mounting Lifecycle Methods

1.  constuctor(props)
    -   A special function that will get called whenever a new component is created.
    -   Initializing state Binding the event handlers
    -   <span style='color:red;'>Do not cause side effects. Ex: HTTP requests</span>
    -   super(props) Directly overwtite this.state
2.  static getDerivedStateFromProps(props, state)
    -   When the state of the component depends on changes in props over time.
    -   Set the state
    -   <span style='color:red;'>Do not cause side effects. Ex: HTTP requests</span>
3.  render()
    -   Only required method
    -   Read props & state and return JSX
    -   <span style='color:red;'>Do not change state or interact with DOM or make ajax calls.</span>
    -   Children components lifecycle methods are also executed.
4.  componentDidMount()
    -   Invoked immediately after a component and all its children components have been rendered to the DOM
    -   <span style='color:red;'>Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load data</span>

### Updating Lifecycle Methods

1.  static getDerivedStateFromProps(props, state)
    -   Method is called every time a component is re-rendered
    -   Set the state
    -   <span style='color:red;'>Do not cause side effects. Ex: HTTP requests</span>
2.  shouldComponentUpdate(nextProps, nextState)
    -   Dictates if the component should re-render or not
    -   Performance optimization
    -   <span style='color:red;'>Do not cause side effects. Ex: HTTP requests Calling the setState method</span>
3.  render()
    -   Only required method
    -   Read props & state and return JSX
    -   <span style='color:red;'>Do not change state or interact with DOM or make ajax calls.</span>
4.  getSnapshotBeforeUpdate(prevProps, prevState)
    -   Called right before the changes from the virtual DOM are to be reflected in the DOM
    -   Capture some information from the DOM
    -   Method will eiger return null or return a value. Returned value will be passed as the third parameter to the next method.
5.  componentDidUpdate(prevProps, prevState, snapshot)
    -   Called after the render is finished in the re-render cycles
    -   Cause side effects

### Unmounting Phase Methods

1. componentWillUnmount()
    - Method is invoked immediately before a component is unmounted and destroyed
    - Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers.
    - <span style='color:red;'>Do not call the setState method</span>

### Error Handling Phase Methods

1. static getDerivedStateFromError(error), componentDidCatch(error, info)

    - When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component
