class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0



        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Child - Update");
        console.log("current prop is ", this.props.value);

        console.log("prevState", prevState.name)
        console.log("prevProps", prevProps);
    }


    
    componentDidMount(){
        console.log("this is inside child component")
    }
    render(){
        return(
            <div>
                {/* {
                    this.componentDidUpdate()
                } */}

            <h1> Counter Component</h1>
             <button  onClick={this.props.changeParent}> Change From Chlid</button>
            </div>
        )

        
    }
}