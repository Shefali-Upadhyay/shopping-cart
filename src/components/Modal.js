import React, { Component } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import { hideModal, editColour, editSize, editQuantity, saveEdit } from '../actions/modalActions';

class Modal extends Component {
  render() {
    const {cartItems, editItem} = this.props;
    const object=find(cartItems, function(item) { return item.p_id===editItem });
    return (
      <div className="modal" style={{display: this.props.modalStatus===false ? 'none' : 'block', transform: this.props.modalStatus ? 'translateY(0vh)' : 'translateY(-100vh)'}}>
        <div className="modal-wrapper">
          <div className="modal-dialog">
            {object!==undefined? 
              <div className="modal-content">
              <div className="modal-header">
                <button className="close" onClick={()=>{this.props.hideModal()}}>&times;</button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <hr className="editline"/>
                    <br/>
                    <h5 className="text-center text-muted" style={{'text-transform': 'uppercase'}}>{object.p_name}</h5>
                    <h1 className="text-center">$57</h1>
                    <br/>
                    <p className="text-center text-muted">{object.p_name}</p>
                    <form>
                      <div className="form-group">
                        <div className="d-flex justify-content-center mb-3">
                          <button className="dressColour" style={{ background: object.p_available_options.colors[0].hexcode }} onClick={(e)=>{e.preventDefault(); this.props.editColour(object.p_available_options.colors[0].name)}}></button>
                          <button className="dressColour" style={{ background: object.p_available_options.colors[1].hexcode }} onClick={(e)=>{e.preventDefault(); this.props.editColour(object.p_available_options.colors[1].name)}}></button>
                          <button className="dressColour" style={{ background: object.p_available_options.colors[2].hexcode }} onClick={(e)=>{e.preventDefault(); this.props.editColour(object.p_available_options.colors[2].name)}}></button>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <select className="form-control" onChange={(e) => {this.props.editSize(e.target.value)}}>
                              <option value="">SIZE</option>
                              <option value="s">s</option>
                              <option value="m">m</option>
                              <option value="l">l</option>
                              <option value="xl">xl</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select className="form-control" onChange={(e) => {this.props.editQuantity(e.target.value)}}>
                              <option value="1">QTY:1</option>
                              <option value="2">QTY:2</option>
                              <option value="3">QTY:3</option>
                              <option value="4">QTY:4</option>
                              <option value="5">QTY:5</option>
                              <option value="6">QTY:6</option>
                              <option value="7">QTY:7</option>
                              <option value="8">QTY:8</option>
                              <option value="9">QTY:9</option>
                              <option value="10">QTY:10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary mb-3" onClick={()=>{this.props.saveEdit(this.props.editItem, this.props.cartItems, this.props.itemColour, this.props.itemSize, this.props.itemQuantity)}}>Save</button>
                      </div>
                      <p className="text-center text-muted"><u>See Product Details</u></p>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <img src={`/images/${object.p_image}.jpg`} alt="Product"/>
                  </div>
                </div>
              </div>
            </div>
            :null
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  modalStatus: state.cart.openModal,
  editItem: state.cart.editItem,
  itemColour: state.modal.itemColour,
  itemSize: state.modal.itemSize,
  itemQuantity: state.modal.itemQuantity
});

export default connect(mapStateToProps,{hideModal,editColour, editSize, editQuantity, saveEdit})(Modal);