class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision ';
        const subtitle = 'Some subtitle';

        const options = ['One', 'Two', 'Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do??</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll() {
        alert('removeAll');
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove all</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option} />
                    })
                }
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        console.log(e.target.elements.btnAdd.innerText);
        if(option) {
            console.log(option);
            //e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button name="btnAdd">Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
