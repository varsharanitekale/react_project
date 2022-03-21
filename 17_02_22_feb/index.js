class App extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Varsha",
            Career:"Engginer"
        }

    }
    postData=(someUser)=>{
        // const newUser={
        //     name:"geekster",
        //     job:"Placement of Students"
        // }
        axios.post("https://reqres.in/api/users", {someUser}).then(res=>{
            console.log(res)
        })

        
    }
    submitForm=(e)=>{
        e.preventDefault()
        const user={
            name:this.state.name,
            job:this.state.job,


        };
        this.postData(user)

        // axios.post("https://reqres.in/api/users", {user}).then(res=>{
        //     console.log(res)
        // })

        
        console.log("submiting form", this.state.name, this.state.Career);
        
    }
    changeName=(event)=>{
        this.setState(pre=>{
            return{
                name:event.target.value
            }
            console.log(name)
        })
    }
        // console.log(event.target.value);
        changeCareer=(event)=>{
            this.setState(pre=>{
                return{
                    Career:event.target.value
                }
                console.log(Career)
            })
            

        

    }
    render(){
        console.log(this.state)
        return(
        <div className="app-container">
            <h2 className="alert alert-primary" >this is app</h2>
       {/* <form className="" onSubmit={this.submitForm}>
            <div>
                <label>Name</label>
                <input placeholder="Name" onChange={this.changeName} value={this.state.name}/>

            </div>
            <div>
                <label>Career</label>
                <input placeholder="Career" onChange={this.changeCareer} value={this.state.Career}/>

            </div>
            <button type="submit"> submit </button>
</form>
        <button onClick={this.postData}>Post Some Data</button> */}
<div className="container">
     <form onSubmit={this.submitForm}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" onChange={this.changeName}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" onChange={this.changeCareer} className="form-control" id="exampleInputPassword1"/>
  </div>
    <button type="submit"  className="btn btn-primary">Submit</button>
</form>
</div>
        </div>);
    }
    
    

}
ReactDOM.render(<App/>, document.getElementById("App"))