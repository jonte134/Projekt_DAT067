import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (

    <div className='backgroundcolor'>
        <div>
    
        
      
    <ul>
      
        
        <h5>Register</h5>
        <form>

           <p><input type='text' placeholder='First name*' name='firstName' /></p>
            <p><input type='text' placeholder='Last name*' name='lastName' /></p>
            <p><input type='text' placeholder='Email address*' name='email' /></p>
        </form>
            
            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {  }}>
                Create account
                </button>
     </ul>


   
    </div>
        </div>
        
);

export default connect()(Home);
