class GreetPerson  extends React.Component{

    render(){

        return(
            <>
                <span>Welcome {this.props.name}</span>
            </>
        )
        // <></> or <React.Fragment></React.Fragment> this is  react Fragment....
    }
}