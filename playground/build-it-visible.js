const appRoot = document.getElementById('app');

const app = {
    title: 'Some App',
    subtitle: 'Some subtitle',
    options: []
};

let showText = 'Set visible';
let showStatus = false;

const onShowHide = () => {
    if(!showStatus) {
        showText = 'Hide'
        showStatus = true;
        renderApp();
    } else {
        showText = 'Set visible'
        showStatus = false;
        renderApp();
    }
};

const renderApp = () => {
    console.log(app.options);
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowHide}>{showText}</button>
            {showStatus && <p>Visible content</p> }
            
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();