function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');


    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    list.addClass('results');

    //Events
    incrementBtn.on('click', function(){
       let textAreaValue = (+$('.counter').val() + 1);
       $('.counter').val(textAreaValue);
    });

    addBtn.on('click', function(){
        let newLi = $(`<li>${$('.counter').val()}</li>`);
        $('.results').append(newLi);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
