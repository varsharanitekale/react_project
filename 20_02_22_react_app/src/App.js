class App extends  React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //     text:"something"


    //     }

    // }
    // textChange=(e)=>{
    //     const newValue=e.target.value;
    //     // this.text=newValue;
    //     // this.forceUpdate();

    //     this.setState({
    //         text:newValue
    //     });
    // }
    //     alertABCD=, ()=>{
    //         alert("ABCd");
    //     }
    //     alert1234=()=>{
    //         alert("1234");
    //     }
    constructor(){
        super()
        this.state={
            text:""
        }
        this.inputRef=React.createRef();



    }
    updateText=(e)=>{
        const newVal=this.inputRef.current.value;
        this.setState({
            text:newVal
        })
    
    }
    
    render(){
        const name=["neel", "varsjsa", "shela", "Shital"]
        return(
    //         <div><h1> Simple App with State</h1>
    //         <input type="text"  placeholder="Type Something"  onChange={this.textChange}/>
    //        <h2>{this.state.text}</h2>
    //        <button onClick={this.alertABCD}> Click Me To Alert ABCD</button>
    //  <button onClick={this.alert1234}>Click me to Alert 1234</button>
    //         </div>
    <div>
        <h2> This is Reaact Ref</h2>
        <input  ref={this.inputRef}type="text"/>
        <button onClick={this.updateText} >Update Below </button>
        <h2>{this.state.text}</h2>
        <br/>
        <br/>
        <br/>
        {name.map(single_name=>
    
        <GreetPerson name={single_name}/>

            // <GreetPerson name={single_name}/>
            
        )}
    </div>
        )
    }
}