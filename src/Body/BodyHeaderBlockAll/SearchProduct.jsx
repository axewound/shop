import React from 'react';


    class SearchProduct extends React.Component {
        render() {
            {console.log(this)}
            return (
                <div className="container">
                    <div className="search-outer">
                        <form
                            role="search"
                            method="get"
                            id="searchform"
                            className="searchform"
                            action=""
                        >
                            {/* input field activates onKeyUp function on state change */}
                            <input
                                type="search"
                                onChange={this.props.onKeyUp}
                                name="s"
                                id="s"
                                placeholder="Search"
                            />
                            <button type="submit" id="searchsubmit">
                                <i className="fa fa-search" aria-hidden="true" />
                            </button>
                        </form>
                    </div>
                    <ul className="data-list">
                         post items mapped in a list linked to onKeyUp function
                        {this.props.products.map((item, index) => (
                            <li className={"block-" + index}>
                                <a className="title" href={item.link}>
                                    <h3>{item.title}</h3>
                                </a>
                                <a className="link" href={item.link}>

                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
}


export default SearchProduct;