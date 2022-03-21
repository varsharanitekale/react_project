console.log("first");
const x=[12, 2, 3, 4, 5]
//Array Filter
const result=x.filter(filterElement)
function filterElement(num){
    if(num>3){
        return true;
    }else{
        return false;
    }

/ Filter Method.....
}
console.log(result)
const res=x.filter(e=>{
    if(e>5){
        return true;
    }
    else{
        return false;
    }

})
console.log(res)