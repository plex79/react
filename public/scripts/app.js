'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'React test from template'
    ),
    React.createElement(
        'p',
        null,
        'some text'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
