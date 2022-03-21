class App1 extends React.Component{
constructor(props){
    super(props);
    this.state={
        text:"",
    }
    this.inputRef=React.createRef();
console.log(this.inputRef)
}
updateText=(e)=>{
 
    const newVal=this.inputRef.current.value;
    
    this.setState(
        {text:newVal}
        )
}


render(){
    const names=["varsharani", "Shivdas", "Shivkanta", "Maroti", "Soni","Balaji", "Mau", "Seema"]

    return(
        <div>
            <h2> This is react Ref</h2>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.updateText}> Update below</button>
         <h2>{this.state.text}</h2>
         <br />
         <br />
         <div>
        {names.map(single_name=>
         < GreetPerson name={single_name}/>


        )

        } 
       </div>
        </div>
    )
}
}