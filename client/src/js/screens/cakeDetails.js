import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import { getCake } from '../../store/cake/actions';

export class CakeDetails extends Component{
  constructor(){
    super();
    this.state = {
      editable:false
    }
  }
  componentWillMount(){
    const {pathname} = this.props.history.location;
    const parts = pathname.split('/cake/');
    this.props.getCake(parts[1]);
  }
  render() {
    const {name,comment,imageUrl,yumFactor} = this.props.cake;
    return (
        <div className=" col-12 card">
        <StyledImage src={imageUrl} className="image-style card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-text">{name}</h3>
          <h3 className="card-text">comments:{comment}</h3>
          <h3 className="card-text">yumFactor:{yumFactor}</h3>
        </div>
      </div>
    )
  }
}
const StyledImage = styled.img`
    width:300px;
    height:300px;
`;
const mapStateToProps = state => {
  console.log(state);
  return {
  cake: state.cakes.item
}};

const mapDispatchToProps = { getCake };
export default connect(mapStateToProps, mapDispatchToProps)(CakeDetails);
