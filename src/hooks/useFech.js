import { useEffect, useState } from "react";

export const useFetch = (url) => {
    
    const [state, setstate] = useState({
        data : null,
        isLoading : true,
        hasError : null
    })

    const getFetch = async () =>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            const codeStatus = res.status

            if(codeStatus !=200 ) throw new Error(res.statusText )
        
            setstate({
                ...state,
                data,
                isLoading: false,
            })

            
        } catch (error) {
            setstate({
                ...state,
                hasError : error.message,
                
            })
        }

    }


    useEffect( () => {
        getFetch()

    }, [url])
    

    return {
        info : state.data,
        isLoading : state.isLoading ,
        hasError :  state.hasError
    };
}