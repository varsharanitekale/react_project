class App extends React.Component{

    
    displayArray=()=>{
        for(let i =0; i<arr.length; i++){
            const obj=arr[i]
            console.log(obj)
    
        }
    }
    

    
   render(){
        
        const arr=[{ PHOTOCOPIER: "PHOTOCOPIER" },
        { AIR_CONDITIONING: "AIR_CONDITIONING" },
        { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
        { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },];
        

        return(
            <div>
            <h2>
                Hello I am App
            </h2>
            {this.displayArray()}
            </div>
        )
    }
}

ReactDOM.render(
    
    document.createElement.element("root")

)