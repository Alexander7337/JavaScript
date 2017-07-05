function createBook(selector, bookTitle, authorName, isbn) {
    
    let generateBook = (function () {
        let id = 1;     
        return function (selector, bookTitle, authorName, isbn) {
            let container = $(selector);
            let newBookDiv = $('<div>');
            newBookDiv.attr('id', `book${id}`);
            newBookDiv.css('border', 'none');
            let title = $(`<p class="title">${bookTitle}</p>`);
            let author = $(`<p class="author">${authorName}</p>`);
            let number = $(`<p class="isbn">${isbn}</p>`);

            title.appendTo(newBookDiv);
            author.appendTo(newBookDiv);
            number.appendTo(newBookDiv);

            let selectBtn = $('<button>Select</button>');
            let deselectBtn = $('<button>Deselect</button>');
            selectBtn.on('click', () => newBookDiv.css('border', '2px solid blue'));
            deselectBtn.on('click', () => newBookDiv.css('border', 'none'));

            selectBtn.appendTo(newBookDiv);
            deselectBtn.appendTo(newBookDiv);

            newBookDiv.appendTo(container);
            id++;
        };
    }());

    generateBook(selector, bookTitle, authorName, isbn);
}
