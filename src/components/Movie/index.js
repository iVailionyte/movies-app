import React from 'react';

const Movie = (props) => (
  <div>
    {props.id}
    <h2>
      {props.title}
    </h2>
    <p>
      {props.description}
    </p>
  </div>
);

// const Movie = () => (
//   <div>
//     <h1>Movie Title</h1>
//     <div>Movie Description</div>
//   </div>
// )

// const Main = () => {
//     return (
//         <div>Hello</div>
//     )
// }

// function Main() {
//     return 'Hello'
// }

// const Main = function() {
//     return 'Hello';
// }

// const Main = () => 'Hello';

// const Main = () => ('Hello World');

export default Movie;
