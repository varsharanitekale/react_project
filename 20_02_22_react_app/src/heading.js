class Heading extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tabIdx:"Home",
        }
    }
    changeTab=(newtabIdx=>{
        this.setState({
            tabIdx:newtabIdx
        })

    });
    // renderTab=()=>{
    //     switch(this.state.tabIdx){
    //         case "Home":
    //             return <Home/>
                
    //         case "Search":
    //             return <Search/>
            
    //         case "Reels":
    //             return <Reels/>
                
    //         case "Activity":
    //             return <Activity/>
                
    //         case  "Profile" :
    //             return <Profile/>
    //         default:
    //             return <Home/>;

    //     }
   // }
    render(){
        return(
            <div>
                <h1>
                    Heading
                </h1>
                {this.state.tabIdx=="Home"?
                <Home/>
                :
                this.state.tabIdx=="Search"?
                    <Search/>
                    :
                    this.state.tabIdx=="Reels"?
                    <Reels/>

                    :
                    this.state.tabIdx=="Activity"?
                    <Activity/>

                    :
                    
                    <Profile/>

                }
            
            
            {/* {this.renderTab()} */}
            <BottomNav geek_fun={this.changeTab}/>
</div>
        
        )
    }
}