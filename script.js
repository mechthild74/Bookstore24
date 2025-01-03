function init() {
    getFromLocalStorage();
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
    renderCards();
}

function calculateLike(index) {
    if (books[index].liked === true) {
        books[index].likes = books[index].likes - 1;
        books[index].liked = false;
    }
    else {
        books[index].likes = books[index].likes + 1;
        books[index].liked = true;
    };
    saveToLocalStorage();
}

function addComment(index) {
    let inputField = document.getElementById('input');
    
    if (inputField.value != "") {
        let input = inputField.value;
        
        inputField.value ="";
        inputField.placeholder = "Schreibe Deinen Kommentar";
    
        let newComment = {
            "name": "Mechthild",
            "comment": input
        };
        books[index].comments.unshift(newComment);
        saveToLocalStorage();
        renderCards();
    }
}

function saveToLocalStorage(){
    localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage(){
    let updateBooks = JSON.parse(localStorage.getItem("books"));
    if (updateBooks && updateBooks.length > 0) {
    books = updateBooks
    }
}