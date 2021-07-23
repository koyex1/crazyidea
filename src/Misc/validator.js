export const existAlready = (array)=>{

    for(let i=0 ; i<array.length; i++){
        for(let j=i+1 ; j<array.length; j++){
               if(array[i].x.trim() === array[j].x.trim() ){                   
                    return {condition:true, i, j};
                }
               
        }
    }

    return {condition:false};
}

export const numberValidator = (array) => {

    for(let i=0 ; i<array.length; i++){
        if(typeof(array[i].y)!= 'number'){
            return {condition: false, i};
        }
    }
    return {condition: true};
}

export const emptyXValidator = (array) => {
   

  
    for(let i=0 ; i<array.length; i++){
        if(array[i].x){
            if(!array[i].x.trim())     return {condition: false, i}

        }
        else return {condition: false, i}
    }


    return {condition: true};
}

export const emptyYValidator = (array) => {
   
console.log(array)
   
    for(let i=0 ; i<array.length; i++){
        if(array[i].y){
            if(typeof array[i].y =='string' && !array[i].y.trim())     return {condition: false, i}

        }
        else return {condition: false, i}
    }


    return {condition: true};
}