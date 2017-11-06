
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            buttonText: true,
            visibility: true
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                buttonText: !prevState.buttonText,
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility app</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.buttonText ? 'Hide' : 'Show'}</button>
                {this.state.visibility && <p>Akapit tekstu ;)</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// const app = {
//     title: 'Some App',
//     subtitle: 'Some subtitle',
//     options: []
// };

// let showText = 'Set visible';
// let showStatus = false;

// const onShowHide = () => {
//     if(!showStatus) {
//         showText = 'Hide'
//         showStatus = true;
//         renderApp();
//     } else {
//         showText = 'Set visible'
//         showStatus = false;
//         renderApp();
//     }
// };

// const renderApp = () => {
//     console.log(app.options);
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onShowHide}>{showText}</button>
//             {showStatus && <p>Visible content</p> }
            
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderApp();
