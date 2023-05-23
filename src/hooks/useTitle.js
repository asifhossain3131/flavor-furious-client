import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title(`${title} - FlavorFusion`)
    },[title])
}

export default useTitle