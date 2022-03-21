class Child3 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.context.name)

        return(
            // <GeekConsumer  >
            //     {
            //         (context)=>{
            //             return(
            //            <div> <h1> hi am child</h1>
            //            <p> {context}</p>
            //            </div>
                       
            //            )
            //         }
            //     }
            
            // </GeekConsumer>
            <div>
               <h1>I am Child3</h1>
               <button onClick={this.context.changeFn}> Change all value</button>
               <p> {this.context.name}</p>
              <p> {this.context.age}</p>
         <GrandChild/>
            </div>
        )
    }
    }      
    Child3.contextType=geekContext;
