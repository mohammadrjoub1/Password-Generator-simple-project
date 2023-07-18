let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]",
    ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



function generate()
{
    let len = document.getElementById("numberInput").value;

    let password = "";
    for (var i = 0; i < len; i++) {
        let random = Math.floor(Math.random() * characters.length)
        password += characters[random];

    }
    return password;


}
function press(){
    document.getElementById("box1").textContent = generate();
    document.getElementById("box2").textContent = generate();

}
