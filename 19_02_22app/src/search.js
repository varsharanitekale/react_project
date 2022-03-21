class Search extends React.Component{

    constructor(props){
        super(props);
            this.state={
                cityName:"Bangaluru"

            };
        }
        cityNameChanged=(e)=>{
            const newCityName=e.target.value;
            console.log(newCityName);
            this.setState({cityName:newCityName

            })
            console.log(e);
        }
    
searchCity(){
    console.log("form called")

}
    render(){
        return(
            <div>
                <form action="#" onSubmit={this.searchCity}>
            <input type="search" value={this.state.cityName} placeholder="Search city name" onChange={this.cityNameChanged}/>
           <button> search</button>
                </form>
            </div>
        )
    }
}