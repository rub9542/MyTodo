import React, { Component } from 'react';
import './todo.css';
export class item extends Component {
    render() {
        return (
            <div>
                <label class="custom-checkbox" tab-index="0" aria-label="Checkbox Label">
                   <input type="checkbox" checked />
                   <span class="checkmark"></span>
                   <span class="label">Checkbox Label</span>
                 </label>
            </div>
        )
    }
}
export default item
