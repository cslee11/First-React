import React from 'react'

 function AboutYou extends REact.Component {
     constructor(){
         super();
             this.state = {
                 name:'Chia',
                 dateOfBirth:'',
                 currentDate: '214127'
             }
         
    }
 
    render (){
        return(
        <div>
            <input onChange={}/>
            <h2>About You page</h2>
        </div>
        )
    }
}

export default AboutYou