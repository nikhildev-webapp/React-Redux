import React from 'react'

const About = () => {
  return (
      <>
          <div className="container text-white p-3 m-1 flex flex-wrap">
              <h3>About React Router</h3>
              <p>React Router is the standard library for handling navigation in React applications. Since React is a library for building user interfaces and does not include built-in routing, React Router fills this gap by allowing you to create Single Page Applications (SPAs). In an SPA, users can move between different "pages" without the entire browser refreshing; only the specific components for that route are re-rendered.</p>
              <ul>
                  <h3>Core Components:</h3>
                  <li><strong>BrowserRouter:</strong>Using in the traditional style</li>
                  <li><strong>CreateBrowser:</strong>New Method to Create Routes</li>
                  <li><strong>Routes:</strong> A container that looks through all its child routes and finds the first one that matches the current URL.</li>
                  <li><strong>Link:</strong>: Replaces the standard 'a' tag. It updates the URL and changes the view without a full page reload. </li>
              </ul>
       </div>
      </>
  )
}

export default About