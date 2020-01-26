import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions/cartActions';
import {showModal} from '../actions/modalActions';
import Modal from './Modal';

class Cart extends Component {
  render() {
    const{cartItems} = this.props;
    //here we are using the array reduce() to calculate the total of the cart
    //'a' is the accumulator which is initally set to 0 by passing the value
    //'c' is the currentValue
    const total = cartItems.reduce((a, c) => (a + c.p_price * c.count), 0);
    let subTotal = total;
    let discount = 0;
    if (cartItems.length === 3){
      discount = (total*5)/100;
      subTotal -= discount;
    }
    else if (cartItems.length > 3 && cartItems.length<= 10) {
      discount = (total * 10) / 100;
      subTotal -= discount;
    }
    else if (cartItems.length>10){
      discount = (total * 25) / 100;
      subTotal -= discount;
    }
    return (
      <div className=" p-4 border border-dark rounded">
        <Modal/>
        {cartItems.length === 0 ? <p className="text-center font-weight-bold pt-2">BASKET IS EMPTY</p>: 
          <div>
            <table className="table table-sm">
              <thead className="thead-light">
                <tr>
                  <th className="pl-4">{cartItems.length} ITEMS</th>
                  <th>SIZE</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.p_id}>
                    <td className="p-4">
                      <div className="row">
                        <div className="col-md-6"><img src={`/images/${item.p_image}.jpg`} alt={item.p_name}/></div>
                        <div className="col-md-6">
                          <div className="mb-4">
                            <h5 className="font-weight-bold" style={{'text-transform': 'uppercase'}}>{item.p_name}</h5>
                            <h5><b>Style: </b>#{item.p_style}</h5>
                            <h5 style={{'text-transform': 'capitalize'}}><b>Colour: </b>{item.p_selected_color.name}</h5>
                          </div>
                          <div className="mt-2 pt-4">
                            <button className="btn btn-outline-success mr-1" onClick={() => {this.props.showModal(item.p_id)}}>Edit</button>
                            <button className="btn btn-outline-danger mr-1" onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>Delete</button>
                            <button className="btn btn-outline-warning" onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>Save for Later</button>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3"><h5>{item.p_selected_size.code}</h5></td>
                    <td className="p-3"><h5>{item.count}</h5></td>
                    <td className="p-3"><h5>${item.p_price}</h5></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr className="dline"/>
            <div className="row">
              <div className="col-3">
                <div className="p-2">
                  <b>Need help or have questions?</b>
                  <br/>
                  <br/>
                  <p>Call Customer Service at 1-800-555-5555</p>
                  <u>Chat with one of our stylists</u>
                  <br/>
                  <br/>
                  <u>See return & exchange policy</u>
                </div>
              </div>
              <div className="col-9 pr-4">
                <div className="mr-4">
                  <div className="form-inline float-center">
                    <h6 className="pt-2">ENTER PROMOTION CODE <br/>OR GIFT CARD</h6>
                    <input className="form-control mx-4"></input>
                    <button className="btn btn-outline-dark">APPLY</button>
                  </div>
                  <hr className="dline"/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>total</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-right">
                       ${total}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      {discount===0?<h6>NO DISCOUNT APPLIED</h6>:<h6>PROMOTION CODE <b>JF10</b> APPLIED</h6>}
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-right">-${discount}</h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>ESTIMATED SHIPPING*</h6>
                      <p className="text-muted">You qualify for free shipping<br/>because your order is over $50*</p>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-right">FREE</h6>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>ESTIMATED TOTAL</h6>
                      <p className="text-muted">Tax will be applied during checkout</p>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="text-right">${subTotal}</h6>
                    </div>
                  </div>
                  <hr className="dline"/>
                  <button className="btn btn-primary float-right" onClick={() => alert('Confirm Checkout')}>CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    modalStatus: state.cart.openModal
})

export default connect(mapStateToProps, {removeFromCart, showModal})(Cart);