import React from 'react';

var App = React.createClass({
    getItems: function() {
        // some request here
        return [{id: 1, name: "Cool Banana", price: 2.49},
            {id: 2, name: "Epic Apple", price: 3.29},
            {id: 3, name: "Awesome Grape", price: 0.49}];
    },
    getInitialState: function() {
        return {
            items: this.getItems(),
            cart: []
        }
    },
    addToCart: function(item) {
        var found = false;
        var updatedCart = this.state.cart.map((cartItem) => {
            if (cartItem.name == item.name) {
                found = true;
                cartItem.quantity++;
                return cartItem;
            } else {
                return cartItem;
            }
        });

        if (!found) { updatedCart.push({id: item.id, name: item.name, price: item.price, quantity: 1}) }

        this.setState({
            cart: updatedCart
        });
    },
    render: function(){
        return (
            <div>
                <nav>
                    <h3>Products</h3>
                    <Cart cart={this.state.cart} />
                </nav>
                <div className="Products">
                    {this.state.items.map((item) => {
                        return <Product details={item} addToCart={this.addToCart} />
                    })}
                </div>
            </div>
        );
    }
});

var Cart = React.createClass({
    getInitialState: function() {
        return {
            open: false
        }
    },
    openCart: function() {
        this.setState({
            open: !this.state.open
        })
    },
    render: function() {
        return (
            <div className={"Cart " + (this.state.open ? "Cart-Open" : "")} onClick={this.openCart} >
                <p className="Title">Cart</p>
                <div>
                    {this.props.cart.length > 0 ? this.props.cart.map((item) => {
                        return <p>{item.name}{item.quantity > 1 ? <span> {item.quantity}</span> : ''}</p> }) : <p>Empty</p>}
                </div>
            </div>
        );
    }
});

var Product = React.createClass({
    addToCart: function() {
        this.props.addToCart(this.props.details);
    },
    render: function() {
        let item = this.props.details;
        return (
            <div className="Product" onClick={this.addToCart}>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));





$(document).ready(function(){
    sb_set_basket_events();
});

function sb_set_basket_events(){

    // Set scroll for basket
    $(window).scroll(function(){
        if($(window).scrollTop() === 0){
            $(".basket-container").removeClass("basket-scrolling");
        }else{
            if(!$(".basket-container").hasClass("basket-scrolling")){
                $(".basket-container").toggleClass("basket-scrolling");
            }
        }
    });

    // Set Icon open and close
    $(".basket-icon").click(function(){
        $(this).parent().toggleClass("open-basket");
    });

    // Set add to basket events
    $(".basket-add").click(function(){
        sb_add_to_basket(
            $(this).data("basket-product-id"),
            $(this).data("basket-product-name"),
            $(this).data("basket-product-price")
        );
    });

    // Set remove product from basket
    $(".remove-product").click(function(){
        sb_remove_from_basket($(this));
    });

    // Set on change for prouct amounts
    $(".basket-products input").change(function(){
        sb_sum_total();
    });

}

function sb_add_to_basket(pid, name, price){
    if(sb_product_not_exist(pid)){
        var shortName = name;
        if(name.length > 10){
            shortName = name.substring(15, 0) + "...";
        }
        $(".basket-products ul").append(
            $("<li>").append(
                $("<span>", {"class": "oi oi-x remove-product"}).click(function(){
                    sb_remove_from_basket($(this));
                }),
                $("<input>", {"type": "number", "min": "1"}).val(1).change(function(){
                    sb_sum_total();
                }),
                shortName,
                $("<span>", {"class": "amount"}).text("\u20AC " + price)
            ).data("price", price).data("pid", pid)
        );
    }
    sb_sum_total();
    sb_update_basket_amount();
}

function sb_product_not_exist(pid){
    var notFound = true;
    $(".basket-products ul").find("li").each(function(){
        if($(this).data("pid") == pid){
            var val = Number($(this).find("input").val()) + 1;
            $(this).find("input").val(val);
            notFound = false;
            return false;
        }else{
            notFound = true;
        }
    });
    return notFound;
}

function sb_remove_from_basket(product){
    $(product).parent().remove();
    sb_sum_total();
    sb_update_basket_amount();
}

function sb_sum_total(){
    var total = 0;
    $(".basket-products ul").find("li").each(function(){
        var amount = Number($(this).find("input").val());
        total = total + (amount * Number($(this).data("price")));
    });
    $(".basket-total-amount").text("\u20AC " + total);
}

function sb_update_basket_amount(){
    $(".basket-count p").text($(".basket-products ul").find("li").length);
}

