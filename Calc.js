import React from  'react';
import ReactDOM from 'react-dom';




class Calc extends React.Component {
 constructor() {
    super();
    this.state = {
      result: 0,
      num1: 0,
      num2: 0
    };
    this.updateData1 = this.updateData1.bind(this);
    this.updateData2 = this.updateData2.bind(this);
    this.add= this.add.bind(this);
     this.sub=this.sub.bind(this)
     this.mult=this.mult.bind(this)
     this.div=this.div.bind(this)
  }
  updateData1= (e)=> {
    console.log(e.target.value);
    this.setState({ num1: Number(e.target.value) });
  }
  updateData2=(e)=> {
   
    this.setState({ num2: Number(e.target.value) });
  }
  add =(e)=> 
  {
      this.setState(
          {
             
                result: parseInt(this.state.num1) +parseInt( this.state.num2)
          }
      )
   
  }
   sub =(e)=> {
     this.setState(
          {
             
                result: parseInt(this.state.num1) -parseInt( this.state.num2)
          }
      )
   
  }
  mult =(e)=> {
     this.setState(
          {
             
     result: parseInt(this.state.num1) *parseInt( this.state.num2)
          }
      )
  }
  div =(e)=> {
    this.setState(
          {
             
     result: parseInt(this.state.num1) /parseInt( this.state.num2)
          }
      )
  }

render() {
 return (
      
 <div >
 
     Enter number<input type="text"  onChange={this.updateData1} /><br/>
      Enter number <input type="text"  onChange={this.updateData2}/><br/>
      Result<input type='text' value={this.state.result} /><br/>
          <input type="button" onClick={this.add} value="Add"/>
          <input type="button" onClick={this.sub} value="sub"/>
          <input type="button" onClick={this.mult} value="mult"/>
          <input type="button" onClick={this.div} value="div"/>
  </div> 

    );
  }
}


export default Calc;