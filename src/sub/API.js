import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Sub1(props) {
  return (
    <>
    <main>
      <section>
        <h2>API Documentation</h2>
        <p>
        This is a lightweight web service, (REST interface), which provides an easy way to access the YTS website.
        An API (Application programming interface) is a protocol intended to be used as an interface by software components to communicate with each other.Our API supports many methods, so there should not be a problem coding some nice applications.If you find any bug, or have any questions, or any suggestions please get in touch with us
        </p>
        <p>contact us</p>

        <h3>List Movies</h3>
        <p>HTTP GET</p>
        <table>
          <caption></caption>
          <thead>
            <tr>
              <th>endpoint</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>https://yts.mx/api/v2/list_movies.json<br/></td>
              <td>https://yts.mx/api/v2/list_movies.jsonp<br/></td>
              <td>https://yts.mx/api/v2/list_movies.xml<br/></td>
            </tr>
          </tbody>

        </table>
        
        
        </section>
    </main>
    </>
  );
}

export default Sub1;