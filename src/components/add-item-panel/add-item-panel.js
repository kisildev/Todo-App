import React, {Component} from 'react';
import './add-item-panel.css'

export default class AddItemPanel extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label) {
            this.props.onAddItem(this.state.label);
            this.setState({
                label: ''
            })
        }
    }

    render () {
        return (
            <form className="add-item-panel" onSubmit={this.onSubmit}>
                <input className="add-item-input" type="text"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?"
                       value={this.state.label}
                />
                <button className="add-item-btn btn waves-effect waves-light">Add new item</button>
            </form>
        );
    }
};
   

 