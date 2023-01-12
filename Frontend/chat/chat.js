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

window.addEventListener('DOMContentLoaded',(event)=>{
    const token=localStorage.getItem('token')
    axios.get('http://localhost:4000/getmessages',{headers:{'Authorization':token}})
    .then(result=>{
        console.log(result);
        result.data.messages.forEach(message => {
            if(result.data.uid==message.userId){
                const div=document.createElement('div')
                div.appendChild(document.createTextNode(`You:${message.message}`))
                message_container.appendChild(div)
                // message_container.innerHtml+=`<div>You:${message.message}</div>`
            }else{
                const div=document.createElement('div')
                div.appendChild(document.createTextNode(`${message.name}:${message.message}`))
                message_container.appendChild(div)
                // message_container.innerHtml+=`<div>${message.name}:${message.message}`
            }
            
        });
        
    })
    .catch(err=>{
        console.log(err);
    })
})