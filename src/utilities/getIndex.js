/*
# getIndex
    Parametres:
        obj             object or variable
        objArr          array of objects
        key             key shared by obj and objArr elements
        type            "obj" or "var"            
    Returns:
        i >= 0          index of obj in objArr
        -1              obj not in objArr 
*/
const getIndex = (obj, objArr, type="obj", key ="id") => {
    let matchKey;

    if(type === "obj"){
        matchKey = obj[key];
    }else if(type === "var"){
        matchKey = obj;
    }  
    
    const match = (objArrEl) => objArrEl[key] === matchKey;

    const index = objArr.findIndex(match);
    return index;
}

export default getIndex;