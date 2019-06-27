import React from 'react';
import ReactDOM from 'react-dom';

class  DepositComp extends React.Component{
 constructor(props){
     super(props)
         this.state={
         check1: true,
         check2: false,
         radio1:'',
         principle:0,
         rate:0,
         time:0,
         maturity:0
         }
         this.onRadioChange = this.onRadioChange.bind(this);
         this.FdCalculate=this.FdCalculate.bind(this);
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
         console.log("principle"+e.target.value)
      this.setState({
    
       principle:e.target.value
    });
 }

 handleRate=(e)=>{
         console.log("Rate"+e.target.value)
      this.setState({
    
       rate:e.target.value
    });
 }
 handleTime=(e)=>{
     
      this.setState({
      
       time:e.target.value
    
    });
 }

 FdCalculate=(e)=>{
 
 this.setState(
           {
          
                
                 maturity : parseInt(this.state.principle)*(1+(parseInt(this.state.rate)/25))^(4*parseInt(this.state.time))  
    //  principle : ReactDOM.findDOMNode(this.ref.principle).value,
    //  time: ReactDOM.findDOMNode(this.ref.time).value, 
    //  rate:ReactDOM.findDOMNode(this.ref.rate).value
           }
       )


 
}

render() {



const radio1 =this.state.radio1

        
if(this.state.radio1)
{
  return(
 <div>
<h3>Principle <input type="text" ref='principle' onChange={this.handlePrinciple}/></h3>

<h3> duration<select name="Duration" ref="time" onChange={this.handleRate}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select></h3>
 <h3>Rate Of Interest<input type="text" ref='roi' onChange={this.handleTime}  /></h3>
 <h2>Maturity  ! {this.state.maturity} </h2>

<button onClick={this.FdCalculate}>CALCULATE</button>
<button onClick={this.clear}>CLEAR</button>
 </div>
  );

}

 return(
  <div>
     <h3>Welcome To ICICI  Bank</h3>
          
      <input type="radio" name="radio1" value ="FD"
         checked={this.state.radio1==="FD"} onChange={this.onRadioChange} />FD<br/>
        <input type="radio" name="radio1"  value="RD"
        checked={this.state.radio1==="RD"} onChange={this.onRadioChange}  />RD<br/>
       
         </div>
        );

 
    }
    
    



}
export default DepositComp

