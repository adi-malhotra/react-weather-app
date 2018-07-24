import React, {Component} from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <div className = "container">
                <form onSubmit = {this.props.getData}>
                    <input className = "search" type = "text" placeholder = "Enter name of place here" name = "place"/>
                    <input type = "submit" className = "submitButton"/>
                </form>
            </div>
        );
    }
}