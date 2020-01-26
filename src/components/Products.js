import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart} from '../actions/cartActions';

class Products extends Component {
  componentWillMount(){
    this.props.fetchProducts();
  }
  render() {
    //here directly we are mapping through the props passed and displaying the products
    const productItems = this.props.products.map(product => (
      <div className="col-md-3 py-3" key={product.p_id}>
        <div className="thumbnail text-center">
          <img src={`/images/${product.p_image}.jpg`} alt={product.p_name}/>
          <p className="pt-3" style={{'text-transform': 'uppercase'}}>{product.p_name}</p>
          <p className="font-weight-bold">Price: {product.c_currency}{product.p_price}</p>
          <button className="btn btn-primary" onClick={() => this.props.addToCart(this.props.cartItems, product)}>Add to cart</button>
        </div>
      </div>
    ));

    return (
      <div className="row">
        {productItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  cartItems: state.cart.items
});
//here we are connecting the redux to react
export default connect(mapStateToProps, {fetchProducts, addToCart})(Products);
