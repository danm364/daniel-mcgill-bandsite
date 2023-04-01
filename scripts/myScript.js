const defaultCommentsData = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        paragraph: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",

    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        paragraph: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."

    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        paragraph: "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough."
    }
]

function defaultComments() {
    //Parent container
    const parentNode = document.querySelector('.feed')

    //create/get all the nodes that we will need

    for (let i = 0; i < defaultCommentsData.length; i++) {
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

    nameNode.innerText = defaultCommentsData[i].name
    dateNode.innerText = defaultCommentsData[i].date
    textNode.innerText = defaultCommentsData[i].paragraph
    imgNode.src = "./assets/Logo/grey.png"

    parentNode.appendChild(containerNode)
    containerNode.appendChild(headerNode).insertAdjacentElement("afterend", textNode)
    headerNode.appendChild(nameNode).insertAdjacentElement("afterend", dateNode).insertAdjacentElement("afterend", imgNode)
    }
}

defaultComments()

function createComment() {

    //Parent container
    const parentNode = document.querySelector('.feed')

    //create/get all the nodes that we will need
    const containerNode = document.createElement('div')
    const headerNode = document.createElement('div')
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
    

    //add the correct classes to the new html so styling is added
    containerNode.classList.add("feed__container")
    headerNode.classList.add("feed__header")
    textNode.classList.add("feed__text")
    nameNode.classList.add("feed__name")
    dateNode.classList.add("feed__date")
    imgNode.classList.add("feed__user-img")

    
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

    nameField.style.border = "1px solid black";
    textField.style.border = "1px solid black";

    if (nameNode.innerText === '' && textNode.innerText === '') {
        console.log(textNode.style)
        nameField.style.border = "1px solid red";
        textField.style.border = "1px solid red";
        
    }
    else if (nameNode.innerText === '') {
        nameField.style.border = "1px solid red";
        
    }

    else if (textNode.innerText === '') {
        textField.style.border = "1px solid red";
        alert("Please fill out both the name and the comment you would like to make");
    }
    //keep a limit on comments or else will get too cluttered
    else if (document.querySelectorAll('.feed__container').length > 6) {

        alert("Comments have reached their limit on this page")
        
    }

    
    //create the comment
    else {
        parentNode.prepend(containerNode)
        containerNode.appendChild(headerNode).insertAdjacentElement("afterend", textNode)
        headerNode.appendChild(nameNode).insertAdjacentElement("afterend", dateNode).insertAdjacentElement("afterend", imgNode)
    }

}



const commentBtn = document.querySelector('.comment__btn');
/*we need to get the input from the input/textarea field */


commentBtn.addEventListener("click", (e) => {
    e.preventDefault()
    createComment()
});






