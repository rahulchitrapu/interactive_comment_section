import data from "../data.json" assert{type:'json'}
let {currentUser,comments}=data
console.log(currentUser)
console.log(comments)
// for likes

const likeBtn=document.querySelector(".like")
const dislikeBtn=document.querySelector(".dislike")

likeBtn.addEventListener("click",()=>{
    const likes=document.querySelector(".like_count")
    let newlikes=parseInt(likes.innerText)+1
    likes.innerText=newlikes
})

dislikeBtn.addEventListener("click",()=>{
    const likes=document.querySelector(".like_count")
    let newlikes=parseInt(likes.innerText)-1

    
    likes.innerText=newlikes
})

// reply function

const replyBtn=document.querySelector(".message_navbar_right")
const send=document.querySelector(".send")
send.addEventListener("click",()=>{
    
    send.parentElement.className="none"
})
replyBtn.addEventListener("click",()=>{
    const reply_message=document.querySelector(".none")
    send.parentElement.className="add_comment_reply"
    
})














// exes code



// disLikeBtns.forEach((likeBtn)=>{
    
//     likeBtn.addEventListener("click",()=>{
//         let btnClassNum=likeBtn.classList[1]
//         const likes=document.querySelectorAll(".like_count")
//         likes.forEach((like)=>{
//             let likeClassNum=like.classList[1]
//             if(btnClassNum==likeClassNum){
//                 let numberOfLikes=parseInt(like.innerHTML)
                
//                 like.innerHTML=numberOfLikes-1
//             }
//         })
//     })
// })





// likeBtn.addEventListener("click",()=>{
//     const likes=document.querySelector(".like_count")
//     let newlikes=parseInt(likes.innerText)+1
//     likes.innerText=newlikes
// })

// dislikeBtn.addEventListener("click",()=>{
//     const likes=document.querySelector(".like_count")
//     let newlikes=parseInt(likes.innerText)-1

    
//     likes.innerText=newlikes
// })

// likeBtns.forEach((likeBtn)=>{
    
//     likeBtn.addEventListener("click",()=>{
//         let btnClassNum=likeBtn.classList[1]
//         const likes=document.querySelectorAll(".like_count")
//         likes.forEach((like)=>{
//             let likeClassNum=like.classList[1]
//             // if(btnClassNum==likeClassNum){
//             //     let numberOfLikes=parseInt(like.innerHTML)
//             //     like.innerHTML=numberOfLikes+1
//             // }
//         })
//     })
// })