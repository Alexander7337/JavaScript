function attachEvents(){
    let url = 'https://phonebook-50318.firebaseio.com/phonebook';

    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContact);

    function loadContacts(){
        $('#phonebook').empty();
        $.get(url + '.json')
            .then(displayContacts)
            .catch(displayError);
    }

    function displayContacts(data) {
        let keys = Object.keys(data);

        for (let key of keys){
            let li = $('<li>');
            li.text(data[key].person + ' ' + data[key].phone + ' ');
            li.append($('<a href="#">[Delete]</a>').click(function() {
                    removeContact(key);
                })
            );
            li.appendTo($('#phonebook'));
        }
    }

    function displayError(error){
        $('#phonebook').append('<div>Error</div>');
    }

    function removeContact(key){
        let requestDelete = {
            url: url + '/' + key + '.json',
            method: 'DELETE'
        };

        $.ajax(requestDelete)
            .then(loadContacts)
            .catch(displayError);
    }

    function createContact() {
        let person = $('#person').val();
        let phone = $('#phone').val();
        $('#person').val('');
        $('#phone').val('');

        let newContact = { person, phone};

        let json = JSON.stringify(newContact);

        let requestCreate = {
            url: url + '.json',
            method: 'POST',
            data: json
        };

        $.ajax(requestCreate)
            .then(loadContacts)
            .catch(displayError);
    }
}