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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    console.log(app.options);
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are ur options' : 'No options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What?</button>
            <button onClick={removeAll}>remove all</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();