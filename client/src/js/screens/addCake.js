import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { addCake } from '../../store/cake/actions';

class AddCake extends Component {
  constructor() {
    super();
    this.state={
        name:'',
        yumFactor:'',
        comment:'',
        imageUrl:'',
        formError:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e){
    this.setState({[e.target.id]:e.target.value})
  }
  handleSubmit(){
    const {name,yumFactor,imageUrl,formError,comment} = this.state;
    if(isNaN(parseInt(yumFactor))){
        this.setState({formError:'Enter a valid numeber for yumFactor'})
    }else{
        this.props.addCake({name,yumFactor,comment,imageUrl});
    }
  }
  handleCancel(){
    this.props.history.goBack();
  }
  render() {
      const {name,yumFactor,imageUrl,formError,comment} = this.state;
      const {cakeAdded} = this.props;
    return (
        <React.Fragment>
        {(cakeAdded)?(<div class="alert alert-success" role="alert">
            Added a new cake, you can check out new cake list now!!
        </div>):null}
        <div className="card">
            Cake Name:<input onChange={this.handleInputChange} id="name" value={name} type="text"></input>
            ImageUrl(optional):<input onChange={this.handleInputChange}  value={imageUrl} id="imageUrl" type="text"></input>
            Yum Factor:<input onChange={this.handleInputChange}  id="yumFactor" value={yumFactor} type="text"></input>
            Comment:<input onChange={this.handleInputChange}  id="comment" value={comment} type="text"></input>
        </div>
        {formError ? <div>{formError}</div> : null}
        <div onClick={this.handleCancel} className="btn btn-danger">Cancel</div>
        <div onClick={this.handleSubmit} className="btn btn-primary">Save</div>
        </React.Fragment>


    );
  }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        cakeAdded:state.cakes.cakeAdded,
  }};
const mapDispatchToProps = {addCake };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCake));;