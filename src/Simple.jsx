import React from 'react';


class Simple extends React.Component {

   state = {
            searchString: "",
            products:this.props.products
        };

        handleChange = this.handleChange.bind(this);

    componentDidMount() {
        console.log(this)
        this.setState({
            products:this.props.products
        });
        this.refs.search.focus();
    }

    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    render() {
        let _users = this.props.products;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _users = _users.filter(function(user) {
                return user.title.toLowerCase().match(search);
            });
        }

        return (

            <div>
                <h3>React - simple search</h3>
                <div>
                    <input
                        type="text"
                        value={this.state.searchString}
                        ref="search"
                        onChange={this.handleChange}
                        placeholder="type name here"
                    />
                    <ul>
                        {_users.map(l => {
                            return (
                                <li>
                                    {l.title} <a href="#">{l.email}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Simple