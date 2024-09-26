import React, { useEffect, useState } from 'react';
import './Contact.css'


const Contact = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [body,setBody]=useState('')

return (
    <div>
            <div className='form-container'>
                
                <div>
                    <h2 >CONTACT US</h2>
                
                </div>
         <br/>

         
            <form className='form-group' >
                
                <h4>NAME </h4>
                <input type="text" placeholder="Name" value={email} onChange={(e) => setEmail(e.target.value)} required /> 
                <h4>EMAIL </h4>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <h4>MESSAGE</h4>  
                <textarea required placeholder="Provide your content here" value={body} onChange={(e) => 
                                                            setBody(e.target.value)} 
                />

                <button type="submit" className='submit-btn'>SUBMIT</button>
                
            </form>
          </div>
   
      </div>
  );
};

export default Contact;



