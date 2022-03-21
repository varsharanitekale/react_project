class DisLikeButton extends React.Component{
    render(){
        return(
            <div>
                {/* <h2>Hey Geeks</h2> */}
                <button onClick={this.props.func1}>Dislike</button>
            </div>
        );
    }
}