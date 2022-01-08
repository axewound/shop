import React from 'react';

class Simple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: ''
        };

    }

    handleInputChange = (event) => {
        const target = event.target;
        const { value, name } = target;

        this.setState({
            [name]: target.value
        });
    }

    render() {
        return (
            <form>
                <label>
                    姓名
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    地址
                    <input
                        name="address"
                        type="text"
                        value={this.state.address}
                        onChange={this.handleInputChange} />
                </label>
                <hr/>
                <div>
                    {this.state.name} <br/>
                    {this.state.address}
                </div>
            </form>
        );
    }
}

export default Simple