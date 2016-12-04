/**
 * Created by Alexander7337 on 12/4/2016.
 */
function solve() {
    let newText = "";

    let text = document.querySelectorAll("div #content strong");
    if (text == null){
        console.log("Select text")
    }
    else{
        for (let e of text)
            newText += e.innerHTML;

        document.body.insertAdjacentHTML("beforeEnd", "<div>" +
            "<h2>Summary</h2>" +
            "<p>" + newText +"</p>" +
            "</div>" )
    }
}
