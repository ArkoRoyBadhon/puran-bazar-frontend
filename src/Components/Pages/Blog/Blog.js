import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-lg min-h-screen mx-auto bg-slate-200 px-10 rounded-2xl mb-10'>
            <h4 className="text-2xl text-red-600 font-bold my-10 pt-10">Blogs</h4>
            <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="card w-92 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                        <p>There are four main types of state you need to properly manage in a React apps <br />1. Local state <br />2. Global state <br />3. Server state <br />4. URL state</p>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-92 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-92 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div data-aos="fade-right" className="card w-92 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                        <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <label htmlFor="my-modal" className='btn btn-primary my-12'>Add Blog</label>
            </div>

            {/* modal code  */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Sorry!! This Features is not available right now</h3>
                    <p className="py-4">Comming Soon...</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">ok</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;