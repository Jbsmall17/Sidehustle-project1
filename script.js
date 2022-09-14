const password = document.getElementById('password')
const repassword = document.getElementById('repassword')
const p = document.getElementById('para')

repassword.addEventListener('input',()=>{
   const p1 = password.value;
   const p2 = repassword.value;
   if(p1 === p2){
     p.innerHTML = "password match";
     password.style.borderColor="green";
     repassword.style.borderColor="green";
     p.classList.add('active')
   }
   else{
    p.innerHTML = "&#65121; passwords do not match";
    password.style.borderColor="red";
    repassword.style.borderColor="green";
    p.classList.remove('active');
   }
})
