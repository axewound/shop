import React from 'react';
import s from "./Hamburger.module.css";


class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [{
                text: 'Home',
                id:0
            }, {
                text: 'Products',
                id:1
            }, {
                text: 'Delivery & Payment',
                id:2
            }, {
                text: 'Guarantee',
                id:3
            }, {
                text: 'About Us',
                id:4
            }]
        }
    }
    render() {
        let links = this.state.links.map((link, i) => <li key={link.id} ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link} target="_blank">{link.text}</a></li>);

        return (
            <div className={this.props.menuStatus} id={s.menu}>
                <ul>
                    { links }
                </ul>
            </div>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        };
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? `${s.isopen}` : '';

        return (
            <div ref="root">
                <div className={s.menubar}>
                    <div className={s.hambclicker} onClick={ this._menuToggle }></div>
                    <div id={s.hambmenu} className={ menuStatus }><span></span><span></span><span></span><span></span></div>

                </div>
                <MenuLinks menuStatus={ menuStatus }/>
            </div>
        )
    }
}

export default Menu