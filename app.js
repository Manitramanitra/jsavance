
/*const nombres = [2,4,6,6,8,9];

// utilisation du méthode reduce de js
const somme = nombres.reduce((som,nombre)=>{
    // console.log(som+nombre);   
    return som += nombre;
},0)
console.log(somme);*/
// const fruits = [ 'mangue','pomme', 'goyave','citron','fraise','banane']
// const tab = new Array();
// const fruitsAupluriel = fruits.reduce((signe,fruit)=>{
//     return fruit + 'signe'
// },'s')
// console.log(fruitsAupluriel)
const nombres = [21,33,60,98,4,9]
const trie = nombres.sort((a,b)=>{
    console.log(a-b)
    return a-b;
})
console.log(trie);