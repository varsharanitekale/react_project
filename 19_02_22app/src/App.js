class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cityName:"",
            cityInfo:{}
        }
    

    }
    
    
    #ApiKey="a618f90d02196da57c594f73126e2273"
  API_URL= "api.openweathermap.org/data/2.5/weather?"
    
   cityNameChanged=(newCityName)=>{
    //    const newCityName=e.target.value;
       this.setState({
           cityName:newCityName,
           cityInfo:this.state.cityInfo
       });
       this.fetchWeather(newCityName);
   }


 fetchWeather=async (searchCityName)=>{
     const res=  await fetch(`${this.API_URL})?q={searchCityName}&appid=${this.#ApiKey}`)
    const data= await res.json();
    console.log(data);
    this.state({
        cityName:this.cityName,
        cityInfo:data
    })
 }
    render(){
        return(
        <div>
            <Heading/>
            <Search oncityNameChange={this.cityNameChanged}/>
            <CityInfo  info={this.state.cityInfo}/>
        </div>
            
            );
    }
}