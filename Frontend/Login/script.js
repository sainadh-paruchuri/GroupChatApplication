const cbutton=document.querySelector('.butt');


cbutton.addEventListener('click',event=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    console.log(email,password);

    axios.post('http://localhost:4000/login',{
        email:email,
        password:password
    }).then((response) => {
        console.log(response);
        alert(response.data.msg)
        document.getElementById('email').value=''
        document.getElementById('password').value=''
    }).catch((err) => {
        console.log(err);
        alert(err.response.data.msg)
    });
    
})