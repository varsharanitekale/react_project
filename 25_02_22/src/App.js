class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"varsha",
                age:23,
                changeFn:this.changeState


        }

    }
    changeState=()=>{
        this.setState({
            name:"shivdas",
            age:32,
                    })
    }
    render(){
        // const obj={
        //     name:"varsha",
        //         age:23,
                
        // };
        // const someNewObj={
        //     data:this.state,
        //     changeFn:this.changeState
        // }
        return(
            
            <div>
                <h1>hello i am app</h1>
                <button onClick={this.changeState}> change parent state</button>
                <GeekProvider  value={this.state} >
                    {/* // value can be any thinh */}
                <Child1 />
                <Child2/>
                <Child3/>
                </GeekProvider>
            </div>
        )
    }

}
