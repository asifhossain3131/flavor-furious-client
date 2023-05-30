import { toast } from "react-hot-toast"

const getWishList=()=>{
    let wishList={}
    const savedList=localStorage.getItem('wish-list')
    if(wishList){
        wishList=JSON.parse(savedList)
    }
    return wishList
}

const addToLocalStorage=id=>{
    const wishList=getWishList()
    const addedOne=wishList[id]
    if(!addedOne){
        wishList[id]=1
        toast.success('Food added to your wishlist')

    }
    else{
        toast.error('Food already added to wishlist')
    }
    localStorage.setItem('wish-list', JSON.stringify(wishList))
}

export{
    getWishList,
    addToLocalStorage
}