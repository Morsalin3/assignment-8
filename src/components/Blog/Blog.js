import React from 'react';

const Blog = () => {
    return (
        <div className="container w-75 p-5 text-wrap mt-5">
        <h1 className="text-center text-info pb-1 border-info border-2 border-bottom">Question And Anwser</h1>
       <h4>1. How does react work ?</h4>
       <strong>ans:</strong><p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>       
       <h4>2. Difference of props and state ?</h4>
        <strong>ans:</strong><p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
       <h4>2. How many works useEffect without data load?</h4>
        <strong>ans:</strong><p>
       It's the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes,
       </p>

      </div>
    );
};

export default Blog;