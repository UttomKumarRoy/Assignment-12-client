import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>What are the different ways to manage a state in a React application?</h2>
            <p>There are four main types of state you need to properly manage in your React apps:

Local state
Global state
Server state
URL state

Let's cover each of these in detail:

Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.

Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

Fortunately there are tools such as SWR and React Query that make managing server state much easier.

URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
        </div>
    );
};

export default Blog;