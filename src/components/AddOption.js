import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    }

    AddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        //console.log('aaaaaaaa');
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error: error}));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.AddOption}>
                    <input type="text" name="option" />
                    <button name="btnAdd">Add option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;