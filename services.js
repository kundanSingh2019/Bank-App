import React from 'react';
import DepositComp from './Deposit';
import LoanComp from './Loan'
import { BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom';

class  ServiceComp extends React.Component{


    render()
    {
        return(
<Router>
        <div>
         <div align ="left">
            <Link to= {'/deposit'}>Deposit</Link><br/>
             <Link to= {'/loan'}>Loan</Link><br/>

            </div>
          <Switch>
           <Route exact path="/deposit" component = {DepositComp}/>
           <Route exact path="/loan" component = {LoanComp}/>
         
          </Switch>

        </div>

   </Router>
           
        )
    }
}

export default ServiceComp