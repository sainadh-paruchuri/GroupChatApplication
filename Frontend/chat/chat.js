const send_button=document.getElementById('send_button');
const message_container=document.getElementById('message-container');


send_button.addEventListener('click',event=>{
    event.preventDefault();
    const token=localStorage.getItem('token')
    const message_input=document.getElementById('message_input').value;
    console.log(message_input);
    console.log(token);
    axios.post('http://localhost:4000/message',{
        message:message_input
    },{headers:{'Authorization':token}}).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    });
})

