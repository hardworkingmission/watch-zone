const AddToWatchDb=(id)=>{
    let watchCart={}
    const storedWatchCart=localStorage.getItem('watch-cart')
    if(storedWatchCart){
        watchCart=JSON.parse(storedWatchCart)
    }
    const storedWatch=watchCart[id]
    if(storedWatch){
        watchCart[id]=storedWatch+1
    }else{
        watchCart[id]=1
    }
    localStorage.setItem('watch-cart',JSON.stringify(watchCart))

}
const getWatchFromDb=()=>{
    let watchCart={}
    const storedWatchCart=localStorage.getItem('watch-cart')
    if(storedWatchCart){
        watchCart=JSON.parse(storedWatchCart)
    }
    return watchCart

}
const removeFromDb=(id)=>{
    let watchCart={}
    const storedWatchCart=localStorage.getItem('watch-cart')
    if(storedWatchCart){
        watchCart=JSON.parse(storedWatchCart)
        delete watchCart[id]
        localStorage.setItem('watch-cart',JSON.stringify(watchCart))

    }
}
const removeAllFromDb=()=>{
    localStorage.removeItem('watch-cart')
}
export{AddToWatchDb,getWatchFromDb,removeFromDb,removeAllFromDb}