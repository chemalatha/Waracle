import React, { Component } from "react";
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faCog } from "@fortawesome/free-solid-svg-icons";
export class Cake extends Component{
  navigateToDetailPage(id){
    console.log('id',id);
    this.props.history.push(`/cake/${id}`);
  }
  render() {
      const {name,id,imageUrl,deleteCake} = this.props;
    return (
        <StyledDiv  key={id}  className=" col-lg-4 col-12 card">
        <StyledImage onClick={()=>this.navigateToDetailPage(id)} src={imageUrl} className="image-style card-img-top" alt="..." />
        <div className="card-body">
        <div className="row">
        <div className="col-6">
            <h3 className="card-text">{name}</h3>
          </div>          
          <div className="col-6" onClick={deleteCake}>
            <FontAwesomeIcon icon={faTrash} color='black' />
          </div>
        </div>

        </div>
      </StyledDiv>
    )
  }
}
const StyledDiv = styled.div`
    height:300px;
`;
const StyledImage = styled.img`
    width:100%;
    height:50%;
`;
export default withRouter(Cake);