'use strict';

var user = {
    name: 'Me',
    age: '38',
    location: 'PL'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        user.name ? user.name : 'Anonim'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

//

var app = {
    title: 'Some title',
    subtitle: 'Some subtitle',
    options: ['One', 'Two']
};

function checkSubtitle(sub) {
    if (sub) {
        return React.createElement(
            'p',
            null,
            app.subtitle
        );
    }
}
// moze byc tez 
// {app.subtitle && <p>{app.subtitle}</p>}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    checkSubtitle(app.subtitle),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are ur options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
