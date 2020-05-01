let rickiIpsum = "Really, you're gonna pull that move? I guided your entire civilisation. Your people have a holiday named ricksgiving. They teach kids about me in school. Full disclosure, Morty - it's not. Temporary superintelligence is just a side effect of the Megaseeds dissolving in your rectal cavity. You gotta shove these seeds way up your butt Morty, waay up there. This is because you give Morty Smith bad grades, bitch!";


function printMessage(msg) {
    let element = document.getElementById('js-message');
    element.innerHTML = msg;
}

printMessage(rickiIpsum);

function checkLenghtOfText(msg, max) {
    if ( msg.length > max) {
        return `${msg.substring(0, max)}...`;
    }
    return msg;
}

document.getElementById('js-message-ellipsis').innerHTML = checkLenghtOfText(rickiIpsum, 50);