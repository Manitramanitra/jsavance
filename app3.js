const lastname = document.querySelector('#lastname')
const firstname = document.querySelector('#firstname')
const email = document.querySelector('#email')
const bouton = document.querySelector('#formulaire')
var id=0;
let formData = {}//pour récupérer les données dans les formulaires
// console.log(lastname.name);
for(let champs of [lastname, firstname,email]){
    champs.addEventListener('input',()=>{
        formData[champs.name]=champs.value;
    })
}
function user(val){
    console.log(val);
}
bouton.addEventListener('submit', (e)=>{
    e.preventDefault();
    user({...formData,id:id});
    id++;    
})