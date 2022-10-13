
import data from "./data.json" assert{type:'json'}
let {currentUser,comments}=data
let id=5


// for html body

//for messages
comments.forEach((e)=>{
    
    const list=document.querySelector(".list_of_replies")

    list.innerHTML+=createMessage(e,"")
    let reply_message=document.querySelector(`#reply_messages_${e.id}`)
    
    if(e.replies.length>0){
        e.replies.forEach((mes)=>{
            reply_message.innerHTML+=createMessage(mes,"reply_message")
           
        })
    }
    
})
//for current user
const add_comment=document.querySelector(".add_comment")
add_comment.innerHTML=user(currentUser)


const addBtn=document.getElementById("send")
addBtn.addEventListener("click",()=>{
    let content=document.getElementById("send_input").value
    let obj=createComment(id,content,"today")
    const list=document.querySelector(".list_of_replies")
    list.innerHTML+=createMessage(obj,"","delete")
    document.getElementById("send_input").value=""
    dislike()
    like()
    replybuttons()
    sendbuttons()
    // let deleteBtns=document.querySelectorAll(`.unlink`)
    // deleteBtns.forEach(deleteBtn=>{
    //     deleteBtn.addEventListener("click",()=>{
    //         deleteFunc(deleteBtn.id)
    //     })
    // })
    deleteReplay()

    id++
})



// functions
dislike()
like()
replybuttons()
sendbuttons()
cancelId()
//for reply button



function sendbuttons(){
    const sendBtns=document.querySelectorAll(".send")
    sendBtns.forEach(send=>{
        send.addEventListener("click",()=>{
            
            let num=send.classList[1]
            comments.forEach(e=>{
                if(e.id==num){
                    let content=document.querySelector(`#content${num}`).value
                    let obj=addReply(id,content,"today",e.user.username)
                    e.replies.push(obj)
    
                    // localStorage.setItem("comments",JSON.stringify(comments))
                    let reply_message=document.querySelector(`#reply_messages_${e.id}`)
                    reply_message.innerHTML+=createMessage(obj,"reply_message")
                    dislike()
                    like()
                    replybuttons()
                    sendbuttons()
                    deleteReplay()
                                    
                    document.querySelector(`#content${num}`).value=""   
                    id++
                }
            })
    
            send.parentElement.className=`none ${num}`
        })
    })
}




function replybuttons(){
    const replyBtns=document.querySelectorAll(".message_navbar_right")
    const sendBtns=document.querySelectorAll(".send")
    replyBtns.forEach(replyBtn=>{
        replyBtn.addEventListener("click",()=>{
                const reply_message=document.querySelectorAll(".none")
                let list=replyBtn.classList
                reply_message.forEach(reply=>{
                    let arr=reply.classList
                    arr.forEach(e=>{
                        if(list.contains(e)){
                            sendBtns.forEach(s=>{
                                if(s.classList.contains(e)){
                                    s.parentElement.className=`add_comment_reply ${e}`
                                    cancelId()
                                }
                            })
                        }
                    })
                })
    
         }) 
    })
}






function like(){
    const likeBtns=document.querySelectorAll(".like")
    likeBtns.forEach((likeBtn)=>{
        likeBtn.addEventListener("click",()=>{
           
            let btnClassNum=likeBtn.classList[1]
            let likes=document.querySelector(`#like-count${btnClassNum}`)
            likes.innerHTML=parseInt(likes.innerHTML)+1
        })
    })
}
function deleteReplay(){
    let deleteBtns=document.querySelectorAll(`.unlink`)
    deleteBtns.forEach(deleteBtn=>{
        deleteBtn.addEventListener("click",()=>{
            deleteFunc(deleteBtn.id)
        })
    })
}
deleteReplay()

function dislike(){
    const disLikeBtns=document.querySelectorAll(".dislike")
    disLikeBtns.forEach((dislike)=>{
        dislike.addEventListener("click",()=>{
           
            let btnClassNum=dislike.classList[1]
            let likes=document.querySelector(`#like-count${btnClassNum}`)
            likes.innerHTML=parseInt(likes.innerHTML)-1
        })
    })
}


//for crreating message body and current user

function createMessage(e,classname,newCmt){
    if(newCmt==="delete"||e.user.username==="juliusomo"){
        return `<li  class="message ${classname}">
            <div class="message_container">
            <div class="likes">
                <button class="like ${e.id}"><img src="./images/icon-plus.svg"/></button>
                <span id="like-count${e.id}" class="like_count ${e.id}">${e.score}</span>
            <button class="dislike ${e.id}"><img src="./images/icon-minus.svg"/></button>
            </div>
            <div class="message_body">
                <div class="message_navbar">
                    <div class="message_navbar_left">
                    <img src=${e.user.image.png} alt="logo"/>
                    <p class="name">${e.user.username}</p>
                    <p class="time">${e.createdAt}</p>
                    </div>
                    <div class="message_navbar_right ${e.id} userMessage">
                        <div id="edit${e.id}">
                            <img src="./images/icon-edit.svg"/>
                            <span>edit</span>
                        </div>
                        <div class="unlink" id="delete${e.id}">
                            <img src="./images/icon-delete.svg"/>
                            <span ">delete</span>
                        </div>
                    </div>
                    
                </div>
                <div class="message_content">
                    <p>
                        ${e.content}
                    </p>
                </div>
            </div>
            </div>   
            </li>
            `
    }
    const message=`<li  class="message ${classname}">
            <div class="message_container">
            <div class="likes">
                <button class="like ${e.id}"><img src="./images/icon-plus.svg"/></button>
                <span id="like-count${e.id}" class="like_count ${e.id}">${e.score}</span>
            <button class="dislike ${e.id}"><img src="./images/icon-minus.svg"/></button>
            </div>
            <div class="message_body">
                <div class="message_navbar">
                    <div class="message_navbar_left">
                    <img src=${e.user.image.png} alt="logo"/>
                    <p class="name">${e.user.username}</p>
                    <p class="time">${e.createdAt}</p>
                    </div>
                    <div class="message_navbar_right ${e.id}">
                        <img src="./images/icon-reply.svg"/>
                        <span>reply</span>
                         
                    </div>
                    
                </div>
                <div class="message_content">
                    <p>
                        ${e.content}
                    </p>
                </div>
            </div>
            </div>   
            </li>
            
            <li class="message">
        <div  class="none ${e.id} ">
        
           <img src="./images/avatars/image-juliusomo.webp"/>
           
            <input type="text" id="content${e.id}" placeholder="add a comment"/>
          
            <button type="submit" class="send ${e.id}">reply</button><br/>
            <button type="button" class="cancel ${e.id}" id="cancel${e.id}">X</button>
          
        </div>
      </li>
      <div id="reply_messages_${e.id}">
                
        </div>`

    return message
}
function user(currentUser){
    
    const user=`
    <img src=${currentUser.image.webp}/>
      <input id="send_input" type="text" placeholder="add a comment"/>
      <button id="send" type="submit">SEND</button>
    `
    
    return user
}



function addReply(id,content,date,replyTo){
    const replyObj=
        {
            "id": id,
            "content": content,
            "createdAt": date,
            "score": 0,
            "replyingTo": replyTo,
            "user": {
                "image": { 
                    "png": "./images/avatars/image-juliusomo.png",
                    "webp": "./images/avatars/image-juliusomo.webp"
                  },
                  "username": "juliusomo"
            },
            "replies": []
        }
        return replyObj
    
}


function createComment(id,content,date){
    
    return {
        "id": id,
        "content": content,
        "createdAt": date,
        "score": 0,
        "user": {
            "image": { 
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
        },
        "replies": []
    }
}




function cancelId(){
    const cancelBtns=document.querySelectorAll(`.cancel`)
    cancelBtns.forEach((cancelBtn)=>{
        cancelBtn.addEventListener("click",()=>{
            
            let classNum=cancelBtn.classList[1]
            cancelBtn.parentElement.className=`none ${classNum}`
        })
    })
}





function deleteFunc(id){
    let ele=document.querySelector(`#${id}`)
    let main=ele.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    main.removeChild(ele.parentElement.parentElement.parentElement.parentElement.parentElement)
    
}


//  <button type="button" class="cancel" id="cancel${e.id}">X</button> 

