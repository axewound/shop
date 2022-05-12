import React from 'react';
import s from './Slider.module.css';





class Slide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let slideStyle = { backgroundImage: `url( ${this.props.background})` };
        return (
            <div
                className={s.slider__slide}
                data-active={this.props.active}
                style={slideStyle}
            >
            </div>
        );
    }
}

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            interval: 3,
            autoplay: true
        };

    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if ( this.state.autoplay ) {
                this.nextSlide();
            }
        },this.state.interval * 1000);
    }

    componentWillUnmount() {
        clearInterval( this.timerId );
    }

    pause() {
        this.setState({ autoplay: false });
    }

    resume() {
        this.setState({ autoplay: true });
    }

    prevSlide() {

        let slide = this.state.activeSlide - 1 < 0
            ? this.props.slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }

    nextSlide() {
        let slide = this.state.activeSlide + 1 < this.props.slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide
        });
    }

    render() {
        let slides = this.props.slides;
        this.props.sliderIdCont(this.state.activeSlide)
        return (
            <div onMouseEnter={this.pause.bind(this)} onMouseLeave={this.resume.bind(this)}>
                {slides.map((slide, index) => {
                   /* this.props.sliderIdCont(this.state.activeSlide)*/

                    return (

                    <Slide
                            background={slide.background}
                            active={index === this.state.activeSlide}

                        />
                    );
                })}
                <div className={s.rightArrow} onClick={this.nextSlide.bind(this)}><i className={s.left}></i></div>
                <div className={s.leftArrow} onClick={this.prevSlide.bind(this)}> <i className={s.right}></i></div>
            </div>
        );
    }
}


export default Slider









/*
import React from 'react';
import ReactDOM from 'react-dom';

    const shoppingProducts = [
        {id: 0, name: "Nike VaporFly 4% Flyknit", price: 209, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-7R7zSn.jpg", quantityInCart: 0, inCart: false},
        {id: 1, name: "Nike Air Monarch IV PR", price: 89, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/vjsleghax3228bpidanh/air-monarch-iv-pr-shoe-qf64pl.jpg", quantityInCart: 0, inCart: false},
        {id: 2, name: "Nike Air Max Deluxe SE", price: 149, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/rkhls7wdxdydeg1vkwkt/air-max-deluxe-se-shoe-T6Vkl2.jpg", quantityInCart: 0, inCart: false}
    ];

    class Header extends React.Component {
    render() {
        return (
            <header>
                <Navigation />
                <ShoppingCart quantity={this.this.props.quantity}
                              amountToPay={this.this.props.amountToPay} />
            </header>
        )
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <a href="#">Home</a>
                <a href="#">Browse</a>
                <a href="#">Contact</a>
            </nav>
        )
    }
}

class ShoppingCart extends React.Component {
    constructor(this.props) {
        super(this.props);
        this.showOverlay = this.showOverlay.bind(this);
    }
    showOverlay() {
        document.getElementById('overlay').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    }
    render() {
        return (
            <div id="cart">
                {/!* Hide a number of items if it's equal 0 *!/}
                <span className={this.this.props.quantity == 0 ? "hide-price" : ""}>{this.this.props.quantity}</span>
                <i className="fas fa-shopping-cart"
                   onClick={this.showOverlay}></i>
            </div>
        )
    }
}

class ShoppingCartOverlay extends React.Component {
    constructor(this.props) {
        super(this.props);
        this.updateAmountToPay = this.updateAmountToPay.bind(this);
    }
    closeOverlay() {
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    }
    updateAmountToPay(item) {
        this.forceUpdate();
    }
    render() {
        let itemsInCart = this.this.props.data.itemsInCart.map((item, index) => {
            // Return key which defines an order of items inside a cart. The order in a cart is different than in database
            return <ShoppingCartProduct key={index}
                                        item={item}
                                        indexInCart={index}
                                        removeFromCart={this.this.props.removeFromCart}
                                        updateAmountToPay={this.updateAmountToPay} />
        });
        let amountToPay = 0;
        for (let i=0; i<this.this.props.data.items.length; i++) {
            amountToPay += this.this.props.data.items[i].price * this.this.props.data.items[i].quantityInCart;
        }
        return (
            <div id="overlay">
                <section id="shopping-cart">
                    <div id="cart-header">
                        <span id="cart-title">Shopping Cart</span>
                        <i className="far fa-times-circle"
                           onClick={this.closeOverlay.bind(this)}></i>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemsInCart}
                        </tbody>
                    </table>
                    <span id="empty-cart">{(itemsInCart.length == 0) ? "Shopping cart is empty" : ""}</span>
                    <h3 id="cart-total">Cart Total</h3>
                    <div id="totals">
                        <span>Cart Totals</span>
                        <span>Number of items: {this.this.props.data.quantity}</span>
                        <span>Total: £{amountToPay}</span>
                    </div>
                    <button id="checkout"
                            disabled={itemsInCart.length == 0 ? true : false} >Checkout</button>
                </section>
            </div>
        )
    }
}

class ShoppingCartProduct extends React.Component {
    constructor(this.props) {
        super(this.props);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }
    handleRemoveFromCart(e) {
        this.this.props.removeFromCart(this.this.props.item, this.this.props.indexInCart);
    }
    handleQuantityChange(e) {
        this.this.props.item.quantityInCart = e.target.value;
        // Update total value
        this.forceUpdate();
        this.this.props.updateAmountToPay(this.this.props.item);
    }
    render() {
        return(
            <tr className="items-in-cart">
                <td><img src={this.this.props.item.image}></img></td>
                <td>{this.this.props.item.name}</td>
                <td>£{this.this.props.item.price}</td>
                <td>
                    <input type="number" name="quantity" min="1" max="10" onChange={this.handleQuantityChange} />
                </td>
                <td>£{this.this.props.item.price * this.this.props.item.quantityInCart}</td>
                <td><i className="fas fa-trash"
                       onClick={this.handleRemoveFromCart}></i></td>
            </tr>
        )
    }
}

class ProductList extends React.Component {
    render() {
        let items = this.this.props.items.map((item, index) => {
            return <Product key={item.id}
                            item={item}
                            addToCart={this.this.props.addToCart} />
        });
        return (
            <section id="list">
                {items}
            </section>
        )
    }
}

class Product extends React.Component {
    constructor(this.props) {
        super(this.props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    handleAddToCart(e) {
        this.this.props.addToCart(this.this.props.item);
    }
    render() {
        return (
            <div className="items">
                <img src={this.this.props.item.image}></img>
                <div className="info">
                    <h3>{this.this.props.item.name}</h3>
                    <span>£ {this.this.props.item.price}</span>
                    <button onClick={this.handleAddToCart}
                            disabled={this.this.props.item.inCart}
                            className={this.this.props.item.inCart ? "button-disabled" : ""}>
                        {this.this.props.item.inCart ? "Item in a cart" : "Add to cart"}
                    </button>
                </div>
            </div>
        )
    }
}

class ShoppingCartApp extends React.Component {
    constructor(this.props) {
        super(this.props);
        this.state = {
            items: shoppingProducts,
            quantity: 0,
            amountToPay: 0,
            itemsInCart: []
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    addToCart(item) {
        let itemsInCart = this.state.itemsInCart;
        itemsInCart.push(this.this.props.items[item.id]);
        shoppingProducts[item.id].inCart = true;
        shoppingProducts[item.id].quantityInCart = 1;
        this.setState({
            quantity: this.state.quantity + 1,
            amountToPay: this.state.amountToPay + this.this.props.items[item.id].price,
            itemsInCart: itemsInCart,
            items: shoppingProducts
        });
    }
    removeFromCart(item, indexInCart) {
        let itemsInCart = this.state.itemsInCart;
        shoppingProducts[item.id].inCart = false;
        shoppingProducts[item.id].quantityInCart = 0;
        itemsInCart.splice(indexInCart, 1);
        this.setState({
            quantity: this.state.quantity - 1,
            amountToPay: this.state.amountToPay - this.this.props.items[item.id].price,
            itemsInCart: itemsInCart,
            items: shoppingProducts
        });
    }
    render() {
        return (
            <main>
                <Header quantity={this.state.quantity}
                        amountToPay={this.state.amountToPay} />
                <ShoppingCartOverlay data={this.state}
                                     removeFromCart={this.removeFromCart} />
                <ProductList items={this.this.props.items}
                             addToCart={this.addToCart} />
            </main>
        )
    }
}

ReactDOM.render(<ShoppingCartApp items={shoppingProducts} />,
    document.getElementById('root'));
*/
