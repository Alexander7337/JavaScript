function initializeTable() {
    
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');

    $('#createLink').click(createCountry);

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append(" ")
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append(" ")
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        row.css('display', 'none');
        row.appendTo($("#countriesTable"));
        row.fadeIn();  

        adjustButtons(); 
    }

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        addCountryToTable(country, capital);

        $('#newCountryText').val("");
        $('#newCapitalText').val("");

        adjustButtons();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertBefore(row.prev());
            row.fadeIn();
            adjustButtons();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function() {
            row.insertAfter(row.next());
            row.fadeIn();
            adjustButtons();         
        });
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function(){
            row.remove();
        });
        //$(this).parent().parent().remove();
        adjustButtons();
    }

    function adjustButtons() {
        $('#countriesTable a').css("display", "inline");

        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')").css("display", "none");

        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css("display", "none");
    }
}