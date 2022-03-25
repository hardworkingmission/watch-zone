const AddToMealDb=(id)=>{
    let mealCart={}
    const storedMealCart=localStorage.getItem('meal-cart')
    if(storedMealCart){
        mealCart=JSON.parse(storedMealCart)
    }
    const storedMeal=mealCart[id]
    if(storedMeal){
        mealCart[id]=storedMeal+1
    }else{
        mealCart[id]=1
    }
    localStorage.setItem('meal-cart',JSON.stringify(mealCart))

}
const getMealFromDb=()=>{
    let mealCart={}
    const storedMealCart=localStorage.getItem('meal-cart')
    if(storedMealCart){
        mealCart=JSON.parse(storedMealCart)
    }
    return mealCart

}
const removeFromCart=(id)=>{
    let mealCart={}
    const storedMealCart=localStorage.getItem('meal-cart')
    if(storedMealCart){
        mealCart=JSON.parse(storedMealCart)
        delete mealCart[id]
        localStorage.setItem('meal-cart',JSON.stringify(mealCart))

    }
}
export{AddToMealDb,getMealFromDb,removeFromCart}