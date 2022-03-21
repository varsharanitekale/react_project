class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:"Something",
            text1:"Something Else",
            text2:"other thing"
        }
    }
    textChanged=(e)=>{
        const newValue=e.target.value;
        this.setState({
            text:newValue,
        });
    }
    alert1234=()=>{
        alert("1234");
    }
    render(){
        return(
            <div>simple App with State
                <input type="text" placeholder="Type Something" onChange={this.textChanged}/>
                
                <h1>{this.state.text}</h1>
                <h1>{this.state.text1}</h1>
                <h1>{this.state.text2}</h1>
           <button onClick={_ => alert("abcd")}>Click ion this to print abcd</button>
            </div>
            
        )

        }
}