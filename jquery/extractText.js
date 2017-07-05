function extractText() {
    let result = [];
    let liValues = $('#items li');
    liValues.each((index, value) => result.push(value.textContent));
    $('#result').text(result.join(", "));
}