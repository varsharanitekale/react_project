
  class App extends React.Component{
      constructor(){
          super();
          this.state={
             arr : [
                { PHOTOCOPIER: "PHOTOCOPIER" },
                { AIR_CONDITIONING: "AIR_CONDITIONING" },
                { NON_SMOKING_ROOM: "NON_SMOKING_ROOM" },
                { LAUNDRY_SERVICE: "LAUNDRY_SERVICE" },
              ]
              
          }
      }
      displayArray=(arr)=>{
          const result=[];
          for(let i =0; i<arr.length; i++){
            
            const obj=arr[i];
            console.log(obj);
            for( let item in obj){
                console.log("key", item);
                console.log("value" , obj[item]);
            const divStructure=(<div><small>{item}</small>: <small>{obj[item]}</small></div>
            );
            result.push(divStructure);
        }
          }
          console.log(result);
          return result;
      }
      

      render(){
          return(
              <div>
                  <div>
                      <small></small>
                  </div>
                  {this.displayArray(this.state.arr)}
              </div>
          )
      }
  }

  ReactDOM.render(<App/>, document.getElementById("App"))