import React, { Component } from "react";
import styled from 'styled-components'
import { connect } from "react-redux";
import { faTrash,faPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom'

import { getCakes,deleteCake,addCake } from '../../store/cake/actions';
import Cake from "../components/Cake";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class CakesList extends Component {
  constructor() {
    super();
    this.state = {
      cakes:[]
    }
    this.addCake = this.addCake.bind(this);
  }
  componentWillMount(){
    this.props.getCakes();
  } 
  deleteItem(id){
    this.props.deleteCake(id);
  }  
  addCake(event,name="sampleCake",yumFactor=1,comment="",imageUrl='https://image.shutterstock.com/image-photo/mini-cake-red-berries-chocolate-600w-1718707699.jpg'){
    // this.props.addCake({name,yumFactor,comment,imageUrl});
    this.props.history.push(`/addCake`);
  }
  render() {
    const {cakes,deletedCake} = this.props;
    const filteredCakes = cakes.filter((cake)=>cake._id!==deletedCake._id);
    const cakesEles = filteredCakes.map((cake)=>(
      <Cake key={cake._id} 
            name={cake.name} 
            imageUrl={cake.imageUrl} 
            id={cake._id}
            deleteCake={()=>this.deleteItem(cake._id)}
      />
  ))
    return (
      <div className="container">
        <StyledCard onClick={this.addCake} className="row justify-content-center">                  
          <FontAwesomeIcon icon={faPlus} color='black' />
        </StyledCard>
        <div className="row">                  
          {cakesEles}
        </div>
      </div>

    );
  }
}
const StyledCard = styled.div`
    height:30px;
    width:100%;
    border:1px solid black;
    margin:30px;
`;
const mapStateToProps = state => {
  console.log(state);
  return {
  cakes: state.cakes.items,
  deletedCake:state.cakes.item,
}};

const mapDispatchToProps = { getCakes,deleteCake,addCake };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CakesList));;
