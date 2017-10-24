const user = {
    name: 'Me',
    age: '38',
    location: 'PL'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const template = (
    <div>
        <p>{user.name ? user.name : 'Anonim'}</p>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

////////////////////////////////////////////////////////////////////////////////

// const app = {
//     title: 'Some title',
//     subtitle: 'Some subtitle',
//     options: ['One', 'Two']
// };

// function checkSubtitle(sub) {
//     if(sub) {
//         return <p>{app.subtitle}</p>;
//     }
// }
// // moze byc tez 
// // {app.subtitle && <p>{app.subtitle}</p>}

// const template2 = (
//     <div>
//         <h1>{app.title}</h1>
//         {checkSubtitle(app.subtitle)}
//         <p>{(app.options && app.options.length > 0) ? 'Here are ur options' : 'No options'}</p>
//         <ol>
//             <li>item 1</li>
//             <li>item 2</li>
//         </ol>
//     </div>
// );

const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
