import React, { Component } from 'react'



interface StateInterface{
 value:any

}

export default class Temp extends Component<{},StateInterface> {
    constructor(props:any){
        super(props)
        this.state={
            value:''
        }
    }

    handleChange=(e:any)=>{
        
        this.setState({value:e.target.value})


    }

    addTask=()=>{

        const a=['hh'];
        a.push(this.state.value)

        console.log(a);
        
        
        
        

        
        

    }
   
  render() {
    const {value}=this.state
    const {handleChange,addTask}=this

    return (
      <div>
        <input type="text" onChange={(e)=>handleChange(e)}  value={value}/>
        <button onClick={addTask}
    >click</button>
      </div>
    )
  }
}
