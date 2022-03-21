class Child1 extends React.Component{
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
               <h1>I am Child</h1>
               <p> {this.context.name}</p>
              <p> {this.context.age}</p>

            </div>
        )
    }
    }      
    Child1.contextType=geekContext;
