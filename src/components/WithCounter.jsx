import React, { Component } from 'react'
const WithCounter = WrappedComponent => {
    class Counter extends Component {
        state = {  }
        render() { 
            return ( 
                <WrappedComponent user={{username:"madhu", age:21, company:"Infosys", salary:20000}} />
             );
        }
        
    }
    return Counter;
};
export default WithCounter;