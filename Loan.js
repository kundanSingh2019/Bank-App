import React from 'react';
import ReactDOM from 'react-dom';

class  LoanComp extends React.Component{
 constructor(props){
     super(props)
         this.state={
         check1: true,
         check2: false,
         radio1:'',
         principle:0,
         rate:0,
         time:0,
         emi:0
         }
         this.onRadioChange = this.onRadioChange.bind(this);
         this.EmiCalcultor=this.EmiCalcultor.bind(this);
         this.handlePrinciple=this.handlePrinciple.bind(this);
         this.handleRate=this.handleRate.bind(this);
         this.handleTime=this.handleTime.bind(this);
 }
onRadioChange=(e)=>{

    this.setState({
       
       radio1:e.target.value
    })

}
 handlePrinciple=(e)=>{
       
      this.setState({
      
       principle:e.target.value
    });
 }

 handleRate=(e)=>{
         
      this.setState({
    
       rate:e.target.value
    });
 }
 handleTime=(e)=>{
        
      this.setState({
  
       time:e.target.value
    
    });
 }

 EmiCalcultor=(e)=>{
 
 this.setState(
           {
          
         emi: parseInt(this.state.principal)*parseInt(this.state.rate)*parseInt(Math.pow(1+this.state.rate,this.state.time))/parseInt(Math.pow(1+this.state.rate,this.state.time)-1)
    
           }
       )
 
}

render() {
        
if(this.state.radio1)
{
  return(
 <div>
<h3> Loan Amount<input type="text" ref='principle' onChange={this.handlePrinciple}/></h3>

<h3> Tendure<select name="Duration" ref="time" onChange={this.handleRate}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select></h3>
 <h3>Rate Of Interest<input type="text" ref='roi' onChange={this.handleTime}  /></h3>
 <h2>EMI Details  ! {this.state.emi} </h2>

<button onClick={this.EmiCalcultor}>CALCULATE</button>
<button onClick={this.clear}>CLEAR</button>
 </div>
  );

}

 return(
  <div>
     <h3>Welcome To ICICI LOAN  Bank</h3>
          
      <input type="radio" name="radio1" value ="CAR"
         checked={this.state.radio1==="Car"} onChange={this.onRadioChange} />Car loan
        <input type="radio" name="radio1"  value="HOME"
        checked={this.state.radio1==="Home"} onChange={this.onRadioChange} />Home loan
        <input type="radio" name="radio1"  value="HOME"
        checked={this.state.radio1==="Personal"} onChange={this.onRadioChange} />Personal L
         </div>
        );

 
    }
 

}
export default LoanComp

