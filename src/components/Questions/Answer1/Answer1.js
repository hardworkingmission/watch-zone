import React from 'react';

const Answer1 = () => {
    return (
        <div>
            <p>DOM is like a tree structure and each object or node of DOM is HTML element.Rendering all DOM objects every time when any changes in a single object is time consuming. IT also creates application performance problem.React is a javascript library.DOM manipulation propcess is different in react.When we use react, react automatically creates a replica of real DOM is called Virtual DOM.In the development process react also creates a copy of virtual DOM. When the state of object or node changes in a react application, VDOM gets updated.It then compares its previous state and then updates only those objects or nodes in the real DOM instead of updating all objects or nodes.This process makes react less resource consuming then other fron-end technologies.It makes application faster.</p>
        </div>
    );
};

export default Answer1;