const appRoot = document.getElementById('app');

const app = {
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

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
    app.options.length = 0;
    renderApp();
};

const renderApp = () => {
    console.log(app.options);
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are ur options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <button onClick={removeAll}>remove all</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();