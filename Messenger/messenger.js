function attachEvents(){
    $('#refresh').click(refreshMessages);
    $('#submit').click(submitNewMessage);

    let url = 'https://customdb-c5ad1.firebaseio.com/messenger';
    let text = '';

    function refreshMessages(){
        $('#messages').val('');
        let requestGet = {
            url: url + '.json',
            method: 'GET'
        }
        $.ajax(requestGet)
            .then(displayMessages)
            .catch(displayGetError)
    }

    function displayMessages(messages){
        text = "";

        $('#author').empty();
        $('#content').empty();

        let keys = Object.keys(messages);

        keys.sort(function (x, y) {
            return new Date(y.timestamp) - new Date(x.timestamp);
        });

        for(let key of keys){
            let message = messages[key];
            let author = message.author;
            let content = message.content;

            text += author + ": " + content + '\n';

            $('#messages').val(text);
        }
    }

    function displayGetError(error){
        alert('Error in GET request');
    }

    function submitNewMessage(){
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();

        let newMessageToDb = { author, content, timestamp };
        let json = JSON.stringify(newMessageToDb);

        let requestPost = {
            url: url + '.json',
            method: 'POST',
            data: json
        }
        $.ajax(requestPost)
            .then(refreshMessages)
            .catch(displayPostError)
    }

    function displayPostError(){
        alert("Something went wrong in the POST request")
    }
}