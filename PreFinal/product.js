export let products = [{
    img : "image/1.png",
    id : "1",
    name : "แบม1",
    price : 1500,
    stock : 999
}, 
{
    img : "image/2.png",
    id : "2",
    name : "แบม2",
    price : 1509,
    stock : 779
},   
{
    img : "image/3.png",
    id : "3",
    name : "แบม3",
    price : 1580,
    stock : 989
},   
{
    img : "image/4.png",
    id : "4",
    name : "แบม4",
    price : 1000,
    stock : 199
},   
{
    img : "image/5.png",
    id : "5",
    name : "แบม5",
    price : 1550,
    stock : 888
}
]

export function searchproduct(id){
    return products.find((i)=>i.id==id)
}