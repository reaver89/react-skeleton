var React = require('react');
var ReactDom = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDom.render(<ListManager title='Ingredients for me' />,document.getElementById('ingredients'));
