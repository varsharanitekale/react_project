class GrandChild extends React.Component{
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
               <h1>I am GrandChild</h1>
               <p> {this.context.name}</p>
              <p> {this.context.age}</p>

            </div>
        )
    }
    }      
    GrandChild.contextType=geekContext;
