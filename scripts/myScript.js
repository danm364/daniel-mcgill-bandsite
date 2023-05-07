// const defaultCommentsData = [
//     {
//         name: "Connor Walton",
//         date: "02/17/2021",
//         paragraph: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

//     },
//     {
//         name: "Emilie Beach",
//         date: "01/09/2021",
//         paragraph: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."

//     },
//     {
//         name: "Miles Acosta",
//         date: "12/20/2020",
//         paragraph: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
//     }
// ]






function createComments() {
    let showsRequest = axios.get(request_comments)
    showsRequest.then((resolve)=> {
       console.log(resolve)
    
    //Parent container
    const parentNode = document.querySelector('.feed')
    const parentContainer = document.createElement('div')
    parentContainer.classList.add('feed__parent')

    resolve.data.sort((a, b) => {
        return b.timestamp - a.timestamp
    })

    //create/get all the nodes that we will need

    for (let i = 0; i < resolve.data.length; i++) {

        //add everything to this one node than add all comments to this node add to dom than if comment added remove all than add again
        
    

        const containerNode = document.createElement('div')
        const headerNode = document.createElement('div')
        const textNode = document.createElement('p')
        const nameNode = document.createElement('p')
        const dateNode = document.createElement('p')
        const imgNode = document.createElement('img')

    //select our comment and name inputs

        containerNode.classList.add("feed__container")
        headerNode.classList.add("feed__header")
        textNode.classList.add("feed__text")
        nameNode.classList.add("feed__name")
        dateNode.classList.add("feed__date")
        imgNode.classList.add("feed__user-img")


        const commentDate = new Date(resolve.data[i].timestamp).toLocaleDateString()

        nameNode.innerText = resolve.data[i].name
        dateNode.innerText = commentDate
        textNode.innerText = resolve.data[i].comment
        imgNode.src = "./assets/Logo/grey.png"

        parentContainer.appendChild(containerNode)
        containerNode.appendChild(headerNode).insertAdjacentElement("afterend", textNode)
        headerNode.appendChild(nameNode).insertAdjacentElement("afterend", dateNode).insertAdjacentElement("afterend", imgNode)
    }

    parentNode.appendChild(parentContainer)
})

}
    
    

function addComment(request_comments, api_key) {
    const parentContainer = document.querySelector('.feed__parent')
    //need to remove all the comments to rerender new list with new comment
    parentContainer.remove()

    const textNode = document.createElement('p')
    const nameNode = document.createElement('p')
    const dateNode = document.createElement('p')
    const imgNode = document.createElement('img')

    //select our comment and name inputs
    let nameInput = document.querySelector("#name__input")
    let commentInput = document.querySelector("#comment__text")

    //retrieve name comment info/text
    nameInput = nameInput.value
    commentInput = commentInput.value
    

    //get date when comment is added
    let date = new Date()
    date = date.toLocaleDateString()

    //set inner text equal to inputted info as well as date of comment
    dateNode.innerText = date
    nameNode.innerText = nameInput
    textNode.innerText = commentInput
    imgNode.src = "./assets/Logo/grey.png"

    //make sure both name/comment fields are filled out

    const nameField = document.querySelector('#name__input')
    const textField = document.querySelector('#comment__text')

    //reset to black border
    nameField.style.border = "1px solid black";
    textField.style.border = "1px solid black";

    //change border if there is error if not create comment
    if (nameNode.innerText === '' && textNode.innerText === '') {
        nameField.style.border = "1px solid red";
        textField.style.border = "1px solid red";
        
    }
    else if (nameNode.innerText === '') {
        nameField.style.border = "1px solid red";
        
    }

    else if (textNode.innerText === '') {
        textField.style.border = "1px solid red";
        
    }
    
    //add comment to object array
    else {

        base_url = `https://project-1-api.herokuapp.com/comments/?api_key=${api_key}`


        const postItem = axios.post(base_url, {
            
            name: `${nameNode.innerText}`,
            comment: `${textNode.innerText}`,
            
            
            
        

        }).then((resolve) => {
            console.log(resolve)
        })
    }

}


const api_key = "c9d949b8-3905-4cba-af1d-6cfe9874da94"
request_comments = `https://project-1-api.herokuapp.com/comments/?api_key=${api_key}`


createComments()
const commentForm = document.querySelector('.comment__form')

//add event listener on submit that go through logic
commentForm.addEventListener("submit", (e) => {
    
    e.preventDefault()
    addComment(request_comments, api_key)
    setTimeout(createComments, 500)
    
    
    //need to remove all the comments to rerender new list with new comment
    
    
    
    
    
    //after comment is created reset inputs to blank
    e.target[0].value = ''
    e.target[1].value = ''
});





