const cbutton=document.querySelector('.butt');


cbutton.addEventListener('click',event=>{
    event.preventDefault();
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const password=document.getElementById('password').value;

    console.log(username,email,phone,password);
    axios.post('http://localhost:4000/signup',{
        username:username,
        email:email,
        phone:phone,
        password:password
    }).then((response) => {
        console.log(response);
        alert(response.data.msg)
        document.getElementById('username').value=''
        document.getElementById('email').value=''
        document.getElementById('phone').value=''
        document.getElementById('password').value=''
    }).catch((err) => {
        console.log(err);
        alert(err.response.data.msg)
    });
    
})