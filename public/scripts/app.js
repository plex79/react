'use strict';

var user = {
    name: 'Me',
    age: '38',
    location: 'PL'
};

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
        user.name
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
