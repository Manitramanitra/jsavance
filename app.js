const lastname = document.querySelector('#lastname')
const firstname = document.querySelector('#firstname')
const email = document.querySelector('#email')
const bouton = document.querySelector('#formulaire')

function user(
    {
        nom,
        prenom,
        Email,
        id=Math.floor(Math.random()*new Date())
    })
{
    this.nom = nom;
    this.prenom = prenom;
    this.Email= Email;
    this.id=id;
}

bouton.addEventListener('submit', (e)=>{
    e.preventDefault();
    const moi = new user({
        Email:email.value,
        nom:lastname.value,
        prenom:firstname.value,
    } )
    console.log(moi)
})