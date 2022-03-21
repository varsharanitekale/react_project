class App extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
            displayChild:false
        }
    }
    incrementParent=()=>{
        this.setState({count:this.state.count+1,   displayChild:!this.state.displayChild
        })

    }
    componentDidMount=()=>{
        // console.log("ComponentDidMount")
        this.setState({count:this.state.count+1})
    }
    componentDidUpdate=()=>{
        console.log("parent-Update")
    }
    incrementParent2=()=>{
        this.setState({count:this.state.count+1})
        console.log("hiii")
    }

    render(){
        // {this.componentDidMount()}
        console.log("Render")
        return(
            <div>
                <h2> Parent</h2>
               <h2> {this.state.count} </h2>
               <div>
                   <button onClick={this.incrementParent}>increace</button>

                   <button onClick={this.incrementParent2} > Increment only value</button>
                     {this.state.displayChild?(            
                    <Counter  changeParent={this.incrementParent2} />
                       ):null }
               </div>
            </div>
        )
    }
}
ReactDOM.render(<App/>,
document.getElementById('root'))
