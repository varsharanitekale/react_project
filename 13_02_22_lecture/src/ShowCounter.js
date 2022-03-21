class Show extends React.Component{
render(){
    // console.log(this.props.counter)
    

    return(
        <h2 className="d-inline">{this.props.counterval}   </h2>
    );
}
}