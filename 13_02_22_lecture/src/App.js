 class App extends  React.Component{
     constructor(){
         super();
         this.state={
             counter:0
         }

     }
     increaseCounter=()=>{
         this.setState((previousState)=>{
             return{
                 counter:previousState.counter+1
             }
         })
         console.log(this.state.counter)

         }
        
        
        
         deacreaseCounter=()=>{
            this.setState((prev)=>{
                return{
                    counter:prev.counter-1
                }
            })
            console.log(this.state.counter)
   
            }
           
           
        //  this.setState({counter:this.state.counter+1});
        
     
 render(){
     return(
         <div>
             <h1> Like And Dislike App </h1>
    
             
        {/* <h2>Hiiii , Varsha</h2> */}
         <Like purpose="dislike" func={this.increaseCounter}/>
         <Show  counterval={this.state.counter}/>
        

         <DisLikeButton purpose="dislike"func1={this.deacreaseCounter} />
         </div>

     )
 }
 }
//  ReactDOM.render(
//      <App/>,
//      document.getElementById('App')
//  )