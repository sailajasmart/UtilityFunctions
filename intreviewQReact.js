/*
How to pass value from parent to child in react componets?
>Define a callback in parent which takes the data I need in as a parameter.
>Pass that callback as a prop to the child.
>Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), 
and pass in the data as the argument.

what is Context?
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const MyContext = React.createContext(defaultValue);

Error Boundaries:
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, 
and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle 
methods, and in constructors of the whole tree below them.
Error boundaries do not catch errors for:
>Event handlers (learn more)
>Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
>Server side rendering
>Errors thrown in the error boundary itself (rather than its children)

How to share data between two component?
props,context, useReducers, 

Life Cyle methods in React?
mounting
-----------
>constructor()
>static getDerivedStateFromProps()
>render()
>componentDidMount()

updating
----------
static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

unmounting
componentWillUnmount()


What is virtual Dom in react
https://reactjs.org/docs/faq-internals.html

*/
