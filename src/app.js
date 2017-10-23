var user = {
    name: 'Me',
    age: '38',
    location: 'PL'
}

function getLocation(location) {
    if(location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var template = (
    <div>
        <p>{user.name}</p>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
