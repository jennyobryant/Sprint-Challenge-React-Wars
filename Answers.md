# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS allows developers to create large web applications can change data, without reloading the page.  The main purpose of React is to be fast, scalable, and simple. So React JS solved the problems on DOM opeartion, without even having the page reload, it does by a concept called Virtual DOM. 

1. What does it mean to think in react?

React is the premier way to build big, fast web apps with Javascript.  So one of the many great parts of React is how it makes you think about apps as you build them.  

1. Describe state.

State is plain Javascript objects.  It hold information that influences the output of render, state is managed within the components (similar to variables declared within a function).

1. Describe props.

Props (short for "properties"), as same as state, it is plain JavaScript objects and hold information that influences the output of render.  But props get passed to the component (similar to function parameters). 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects is anything that affects something outside the scope of the function being executed. So functions that execute without side effects are called "pure" functions: they take argurment, and they return values. 

 The effect hook can either run after every render, only on mount and unmount, or when specific values have been changed.  it takes two parameters (first is function to excute, and second is optonal array of variable will changed or trigger execution of the function).  So for example, the component will require two effect hooks, the first is called only when the text prop has been updated and will check if there is no highlight in progress.  The second effect hook requires to clean up the timer referenc when the component unmounts. 
 