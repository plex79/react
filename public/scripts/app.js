'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Some App',
    subtitle: 'Some subtitle',
    options: []
};

// moze byc tez ----- {checkSubtitle(app.subtitle)}
// function checkSubtitle(sub) {
//     if(sub) {
//         return <p>{app.subtitle}</p>;
//     }
// }
// 

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options.length = 0;
    renderApp();
};

var renderApp = function renderApp() {
    console.log(app.options);
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are ur options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'remove all'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
