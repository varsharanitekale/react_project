class App extends React.Component{
    constructor(){
        super()
        this.state={
            data:0

        }

        
    }
    click=()=>{
        axios
        .get("").then(res=>console.log(res.data));

    }
    render(){
        return(
        <div>
            <button onClick="click"> Axios</button>
        </div>
        );
    }
    

}