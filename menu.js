/*loadcartNumbers();*/
let addCart=document.querySelectorAll('.b');
let prod=[{
       name:"pastilla",
       price:15,
       id:1,
       inCart:0

    },
    {
        name:"paella",
        price:18,
        id:2,
        inCart:0
    },
     {
        name:"couscous",
        price:17,
        id:3,
        inCart:0},
    {
            name:"avocado",
            price:16.5,
            id:4,
            inCart:0},
            {
                name:"milk",
                price:17,
                id:5,
                inCart:0},
                {
                    name:"milkshake",
                    price:10.5,
                    id:6,
                    inCart:0},
                    {
                        name:"choclate-cake",
                        price:6.5,
                        id:7,
                        inCart:0},
                        {
                            name:"cookie",
                            price:9,
                            id:8,
                            inCart:0},
                            {
                                name:"strawberry-cake",
                                price:7.5,
                                id:9,
                                inCart:0},
                                {
                                    name:"Hot-Choklate",
                                    price:5.5,
                                    id:10,
                                    inCart:0},
                                    {
                                        name:"morrocan-tea",
                                        price:6,
                                        id:11,
                                        inCart:0},
                                        {
                                            name:"cafe",
                                            price:4,
                                           id:12,
                                           inCart:0}];
for(let i=0;i<addCart.length;i++){
    addCart[i].addEventListener('click',()=>{
    cartNumbers(prod[i]);
    totalCost(prod[i]);
     })
}
function cartNumbers(prod){
    console.log("prod",prod);
    let numberp=localStorage.getItem("cartNumbers");
    numberp=parseInt(numberp);
    if(numberp){   
         localStorage.setItem("cartNumbers",numberp+1);
         document.querySelector("#num").textContent=numberp+1;
      }
      else{
        localStorage.setItem("cartNumbers",1);
        document.querySelector("#num").textContent=1;

      }
      setItems(prod);

}
function loadcartNumbers(){
    var numberp=localStorage.getItem('cartNumbers');
    if(numberp){   
        document.querySelector("#num").textContent=numberp;
     }
}
function setItems(prod){
    if(cartItems!=null){
        if(cartItems[prod.name]==undefined){
 cartItems={
     cartItems,
     [prod.name]:prod
 }
        }
        cartItems[prod.name].inCart+=1;  
      }
else{ 
        prod.inCart=1;
        cartItems={
            [prod.name]:prod
        }
    }
   
    localStorage.setItem('prodInCart', JSON.stringify(cartItems));
    
}


function totalCost(prod){
let cost=localStorage.getItem('totalCost');
cost=parseInt(cost);
if(cost!=0){
    localStorage.setItem("totalCost",cost+prod.price);

}
else{
    localStorage.setItem("totalCost",prod.price);

}
}
displayCart();
function displayCart(){
    let cost=localStorage.getItem('totalCost');
    let cartItems=localStorage.getItem('prodInCart');
    cartItems=JSON.parse(cartItems);
    let prodContainner=document.querySelector(".prodCost")
    cost=parseInt(cost);
    prodContainner.innerHTML+=`
    <div>
     <h1 class="Tot">Total cost is: </h1>
     <h1 class="T">$${cost}</h1></div>`  ;                          
}


