'use strict';

var user = {
    name: 'Me',
    age: '38',
    location: 'PL'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
