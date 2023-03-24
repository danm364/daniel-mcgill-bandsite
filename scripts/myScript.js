


function selectText() {
    nameInput = nameInput.value
    commentInput = commentInput.value
    console.log(nameInput)
    console.log(commentInput)
}
/*we need to get the input from the input/textarea field */
let nameInput = document.querySelector("#name__input")
let commentInput = document.querySelector("#comment__text")
const commentBtn = document.querySelector('.comment__btn');

commentBtn.addEventListener("click", (e) => {
    
    /*Than we need to create new elements like the comment prototype and add new text to these new comments*/
    
    selectText()
});

