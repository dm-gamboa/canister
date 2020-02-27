export const setStorage = (newItem, storageItem = 'items') => {
    if(Array.isArray(newItem)){
        newItem = JSON.stringify(newItem);
    }
    localStorage.setItem(storageItem, newItem);
}

export const getStorage = (storageItem = 'items') => {
    let items = localStorage.getItem(storageItem);
    if(items){
        if(isNaN(items)){
            items = JSON.parse(items);
            return items;
        }else{
            return items*1;
        }
        
    }
    return false;
}