class BottomNav extends React.Component{
   constructor(){
       super();
    this.divStyle={
        position:"fixed",
        bottom:"0px",
        left:"0px",
        backgroundColor:"gray",
        display:"flex",
        justifyContent:"space-evenly",
        width:"100vw",
        height:"30px"
        


       }
   }
    render(){
        return(
            <>
            <div style={this.divStyle}>
            <button onChange={()=>this.props.geek_fun("Home")}
                > Home</button>
            <button onClick={()=>this.props.geek_fun("Search")}>Search</button>
            <button onClick={()=>this.props.geek_fun("Reels")}> Reels</button>
            <button onClick={()=>this.props.geek_fun("Activity")}>Activity</button>
            <button onClick={()=>this.props.geek_fun("Profile")}>Profile</button>
            </div>
            </>
        )
    }
}