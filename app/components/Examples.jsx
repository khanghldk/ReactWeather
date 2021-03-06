var React = require('react');

var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center"> 
        Examples Component
      </h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Barcelona'>Barcelona</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
