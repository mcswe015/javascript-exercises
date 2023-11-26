const removeFromArray = function(arrayRmv, ...toRemove) {
    
    let removed=[];
    arrayRmv.forEach((item) =>{
        if(!toRemove.includes(item)){
            removed.push(item);

        }
        
    })
    return removed;
    }
   
   
        



// Do not edit below this line
module.exports = removeFromArray;


/* let arrayRmvd =[];
   / let remove = arguments[1];
    //let removeIndex=1;
    for(let i=0;i<arguments[0].length;i++){
        let foundInArray=false;
        for(let j=1; j<arguments.length-1;j++){
            if(arguments[0][i]==arguments[j]){
                foundInArray=true;
                break;
            }
        }
        
        if(foundInArray==false){
            arrayRmvd.push(arguments[0][i])
        }
        
    }

    return arrayRmvd;
    
     for(let i=0;i<arrayRmv.length;i++){
        let foundNum=false;
        for(let j=0; j<toRemove.length;j++)
        {
            if(arrayRmv[i]==toRemove[j]){
                foundNum=true;
                break;
            }
        }
    
        if(foundNum==false){
            arrayRmv.splice(i,1);
            i--;

        }
    }*/