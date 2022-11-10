import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-blue-500 p-4'>
                <h1 className='bg-blue-200 p-4'>Difference between SQL and NoSQL</h1>
                <p className='bg-purple-300 p-4'>SQL is relational NoSQL is non-relational <br />
                Sql is structured data in Table , NoSQL is unstructured ,stored in json file <br />
                SQL is rigid schema for bounding. NoSQL is non rigid , flexible . <br />
                SQL is old and sometimes constraining, but also time-tested and increasingly considered a universal interface for data analysis. NoSQL databases are new and flexible, but lack maturity and require user specialization. Pragmatically both models are useful and even growing together.

                 </p>
            </div>
            <div className='bg-blue-500 p-4'>
                <h1 className='bg-blue-200 p-4'>What is JWT, and how does it work?</h1>
                <p className='bg-purple-300 p-4'>
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. <br />

JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

                 </p>
            </div>
            <div className='bg-blue-500 p-4'>
                <h1 className='bg-blue-200 p-4'>What is the difference between javascript and NodeJS?</h1>
                <p className='bg-purple-300 p-4'>
                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                <br /><br />
                Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                <br /><br /> Javascript It's made for creating network-centric apps. on the other hand node js It's made for real-time data-intensive apps that run on multiple platforms.
                 </p>
            </div>
            <div className='bg-blue-500 p-4'>
                <h1 className='bg-blue-200 p-4'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='bg-purple-300 p-4'>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. <br /><br />  </p>
            </div>
        </div>
    );
};

export default Blog;