function init() {
    renderCards();
}

function renderCards() {
    let contentRef = document.getElementById('cards');
    contentRef.innerHTML="";

    for (let index = 0; index < books.length; index++) {
       contentRef.innerHTML += getCardTemplate(index);
    } 
}

function toggleLike(index) {
    calculateLike(index);
    books[index].liked = !books[index].liked;
    renderCards();
}

function calculateLike(index) {
    if (books[index].liked === true) {
        books[index].likes = books[index].likes - 1;
    }
    else {
        books[index].likes = books[index].likes + 1;
    };
}

function addComment(index) {
    let inputField = document.getElementById('input');
    let input = inputField.value;
    console.log(input);
    inputField.value ="";
    inputField.placeholder = "Schreibe Deinen Kommentar";
   
    let newComment = {
        "name": "Mechthild",
        "comment": input
    };
    books[index].comments.unshift(newComment);
    renderCards();
}