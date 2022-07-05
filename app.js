const root = document.querySelector('#root');
// const button = document.querySelector('button');
const users = [
    {
        id:1,
        nom:'Randriamanantena',
        prenom:'Manitra Luc',
        email:'randiluc@gmail.com',
        age:23
    },
    {
        id:2,
        nom:'Randriamanantena',
        prenom:'Miary',
        email:'miaryrandi@gmail.com',
        age:18
    },
    {
        id:3,
        nom:'Randriamanantena',
        prenom:'Manoa',
        email:'Manoa@gmail.com',
        age:6
    },
    {
        id:4,
        nom:'Rakotondravelo',
        prenom:'Mija',
        email:'Mija@gmail.com',
        age:23
    },
]
const corps = document.querySelector('.body')
// console.log(document.querySelector('.body').style.display)
let htmlString=users.reduce((stockpile,user)=>{
    stockpile += creeLigne(user);
    return stockpile
},'');
console.log(htmlString)
document.querySelector('.ajouter').addEventListener('click',()=>{
    document.querySelector('.body').innerHTML = htmlString;
})
// document.querySelector('.ajouter').addEventListener('click',()=>{
//     if(document.querySelector('.body').style.display == ''){
//         for(let user of users){
//             htmlString += creeLigne(user)
//         }
//         corps.innerHTML = htmlString;
//     }
    
//     else{
        
//         if(document.querySelector('.body').style.display == 'none'){
//             document.querySelector('.body').style.display = 'block'
//         }
//     }

// })

// utilisation de la fonction reduce
// document.querySelector(".ajouter").addEventListener('click',()=>{
//     users
// })

// document.querySelector('.effacer').addEventListener('click',()=>{
//     document.querySelector('.body').style.display = "none"
// })
function creeLigne({id,nom,prenom,email,age}){
    return (
        `<tr>
            <td>${id}</td>
            <td>${nom}</td>
            <td>${prenom}</td>
            <td>${email}</td>
            <td>${age}</td>
        </tr>`
    )
}