import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue){
    const [item, setItem] = useState(initialValue)
    useEffect(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        }else{
            parsedItem = JSON.parse(localStorage.getItem(itemName))
        }
        setItem(parsedItem)
    },[])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {item, saveItem}
}

export default useLocalStorage