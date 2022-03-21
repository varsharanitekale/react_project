class CityInfo extends React.Component{

    render(){
        const info=this.props.info;
        let weather_description="";
        if(info.weather_description)
        console.log(this.props.info)
        return(
            <div>
                <h1>
                    {info.cityName}
                </h1>
                <h1>
                    Temperature
                </h1>
                <h1>
                    Cloudy
                </h1>
                <h1>
                    Rain
                </h1>
                <h1>
                    Wind
                </h1>
            </div>
        )
    }
}