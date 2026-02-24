import React from "react";

const Menu = () => {

const menu = [

{
name:"Chicken Burger",
price:"$8",
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},

{
name:"Pizza",
price:"$12",
img:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e"
},

{
name:"Seafood",
price:"$18",
img:"https://images.unsplash.com/photo-1544025162-d76694265947"
}

]


  return (

<div className="bg-gray-50 min-h-screen">


<div className="bg-orange-500 text-white py-14 text-center">

<h1 className="text-4xl font-bold">
Menu 🍽️
</h1>

</div>



<div className="max-w-7xl mx-auto px-6 py-14">


<div className="grid md:grid-cols-3 gap-6">


{menu.map((item,index)=>(

<div className="bg-white shadow rounded-xl overflow-hidden">


<img
src={item.img}
className="h-48 w-full object-cover"
/>


<div className="p-4">


<h3 className="font-bold">
{item.name}
</h3>


<p className="text-orange-500">
{item.price}
</p>


<button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded">
Add to Cart
</button>


</div>


</div>

))}



</div>


</div>


</div>

  )
}

export default Menu