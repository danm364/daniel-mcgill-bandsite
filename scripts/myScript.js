




function createComment() {

    //create/get all the nodes that we will need
    const parentNode = document.querySelector('.feed')
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
    imgNode.src = "./assets/images/Mohan-muruge.jpg"

    //make sure both name/comment fields are filled out
    if (nameNode.innerText === '' || textNode.innerText === '') {
        alert("Please fill out both the name and the comment you would like to make")
    }
    //keep a limit on comments or else will get too cluttered
    else if (document.querySelectorAll('.feed__container').length > 3) {
        alert("Comments have reached their limit on this page")
        
    }
    //create the comment
    else {
        parentNode.appendChild(containerNode).appendChild(headerNode).insertAdjacentElement("afterend", textNode)
        headerNode.appendChild(nameNode).insertAdjacentElement("afterend", dateNode).insertAdjacentElement("afterend", imgNode)
    }

}



const commentBtn = document.querySelector('.comment__btn');
/*we need to get the input from the input/textarea field */


commentBtn.addEventListener("click", (e) => {

    /*Than we need to create new elements like the comment prototype and add new text to these new comments*/
    
    createComment()
});

//need a div with class feed__header
//add a two p childs feed__name and feed__date to this than one image with class feed__user-img


//need a p with class feed__text