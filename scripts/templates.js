
function getCardTemplate(cardIndex) {
    let heartImage = books[cardIndex].liked 
        ? "./assets/icons/heart_full_red.png"
        : "./assets/icons/heart_frame_red.png";

        let commentsHTML = "";
        for (let comment of books[cardIndex].comments) {
            commentsHTML += `
                <tr>
                    <td class="td-width">${comment.name}</td>
                    <td>${comment.comment}</td>
                </tr>
            `;
        }

    return`
        <div class="book-card">
            <h2>${books[cardIndex].name}</h2>
            <hr>
            <img class="book" src="./assets/img/book-307045_1280.png" alt="Buchbild">
            <hr>
            <div class="price-like">
                <p class="price">${books[cardIndex].price} €</p>
                <div class="like">
                    <p>${books[cardIndex].likes}</p>
                    <img onclick="toggleLike(${cardIndex})" src=${heartImage} alt="Herz-Symbol">  
                </div>
            </div>
            <table>
                <tr>
                    <td class="td-width">Author</td>
                    <td>:${books[cardIndex].author}</td>
                </tr>
                <tr>
                    <td>Erscheinungsjahr</td>
                    <td>:${books[cardIndex].publishedYear}</td>
                </tr>
                <tr>
                    <td>Genre:</td>
                    <td>:${books[cardIndex].genre}</td>
                </tr>
            </table>
            <hr>
            <h3 class="align-left">Kommentare:</h3>
            <table id="old-comment" class="old-comment">
                ${commentsHTML}
            </table>
            <div class="comment">
                <input class="input" id="input" type="text" placeholder="Schreibe Deinen Kommentar">
                <img onclick="addComment(${cardIndex})" src="./assets/icons/sent-blue.png" alt="senden Bild">
            </div>
        </div>
        `;
    }