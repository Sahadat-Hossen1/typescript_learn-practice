interface Product{
    title:string;
    price:number;
    isAvailable:boolean;
}
const myProduct:Product={
    title:"man half sleeve t-shirt",
    price:200,
    isAvailable:true
}
const orderStatus:"pending"|"shipped"|"delivered"="pending"
const price:number=300;
const discountPrice:number=price*0.9;
const calculateDiscount=(price:number,discountPrice:number):number=>{
    return price-discountPrice;
}
console.log(calculateDiscount(price,discountPrice))