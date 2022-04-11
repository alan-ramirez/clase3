const productos = [
    {id:'01', name:"articulo1", description:"Descripción 1", img: 'https://picsum.photos/200', stock:"5", price:"400", category:"percusion"},
    {id:'02', name:"articulo2", description:"Descripción 2", img: 'https://picsum.photos/201', stock:"5", price:"600", category:"teclados"},
    {id:'03', name:"articulo3", description:"Descripción 3", img: 'https://picsum.photos/202', stock:"5", price:"300", category:"guitarras"},
    {id:'04', name:"articulo4", description:"Descripción 4", img: 'https://picsum.photos/203', stock:"5", price:"100", category:"teclados"},
    {id:'05', name:"articulo5", description:"Descripción 5", img: 'https://picsum.photos/204', stock:"5", price:"500", category:"guitarras"},
    {id:'06', name:"articulo6", description:"Descripción 6", img: 'https://picsum.photos/205', stock:"5", price:"700", category:"equipamiento"},
]

export const getProducts = new Promise ((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout (() => {
            resolve (productos)
        },2000)
    } else {
        reject ('se pudrio todo')
    }
})