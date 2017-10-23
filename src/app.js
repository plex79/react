var user = {
    name: 'Me',
    age: '38',
    location: 'PL'
}

var template = (
    <div>
        <p>React test from template</p>
        <p>{user.name}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
