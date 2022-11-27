import React from 'react';

const Blog = () => {
    return (
        <div> <br /> 
            <h2 className='text-2xl text-center bg-primary text-white p-3'>Please read this blog</h2> <br />
            <div className='border bg-sky-700 p-4'>
            <h2 className='text-center text-primary text-2xl bg-white'>What are the different ways to manage a state in a React application?</h2> <br />
            <p className='text-white'>There are four main types of state you need to properly manage in your React apps: <br />
                1. Local state <br />
                2. Global state <br />
                3. Server state <br />
                4. URL state <br />                                                                                                                                                                 
                Let's cover each of these in detail: <br />
                Local (UI) state – Local state is data we manage in one or another component.
                Local state is most often managed in React using the useState hook. <br />
                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. <br />
                Global (UI) state – Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                Sometimes state we think should be local might become global. <br />
                Server state – Data that comes from an external server that must be integrated with our UI state.
                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />
                URL state – Data that exists on our URLs, including the pathname and query parameters.
            </p>
            </div> <br />
            <div className='border bg-sky-700 p-4'>
            <h2 className='text-center text-primary text-2xl bg-white'>How does prototypical inheritance work?</h2> <br />
            <p className='text-white'>
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. <br />
            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
            </p>
            </div> <br />
            <div className='border bg-sky-700 p-4'>
            <h2 className='text-center text-primary text-2xl bg-white'>What is a unit test? Why should we write unit tests?</h2> <br />
            <p className='text-white'>
            Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed. <br />
            Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming.
            </p>
            </div> <br />
            <div className='border bg-sky-700 p-4'>
            <h2 className='text-center text-primary text-2xl bg-white'> React vs. Angular vs. Vue?</h2> <br />
            <p className='text-white'>
            Vue provides higher customize and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. <br />
            Which is more popular React Vue or Angular? <br />
            Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively. <br />
            </p>
            </div> <br />
        </div>
    );
};

export default Blog;