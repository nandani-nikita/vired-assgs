var allData;

var xhr = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
xhr.response = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let json = JSON.parse(xhr.responseText);
        allData = json;
    
    }
};
xhr.open("GET", url, true);
xhr.send()

var clickCount = 0;
function getFive(num) {
    var data = allData;
    document.getElementById('users').innerText = ""
    if ((clickCount * num) >= data.length) {
        clickCount = 0;
    }
    let startIndex = clickCount * num;

    let endIndex = (clickCount + 1) * num
    clickCount++;
    console.log("clickCount: ", clickCount)
    var ol = document.createElement('ol');

    for (let i = startIndex; i < endIndex; i++) {

        console.log(data[i].id);
        let li = document.createElement('li')
        text = document.createTextNode(JSON.stringify(data[i].name))

        let anchor = document.createElement('a');
        anchor.setAttribute("href", `http://127.0.0.1:5500/ajax-assg/user.htm?name=` + data[i].name);
        anchor.append(text);
        li.append(anchor);

        ol.appendChild(li);
    }

    document.getElementById('users').appendChild(ol)
}

function getAll() {
    var data = allData;
    document.getElementById('users').innerText = ""

    var ol = document.createElement('ol');

    for (let i = 0; i < data.length; i++) {

        console.log(data[i].id);
        let li = document.createElement('li')
        text = document.createTextNode(JSON.stringify(data[i].name))

        let anchor = document.createElement('a');
        anchor.setAttribute("href", `http://127.0.0.1:5500/ajax-assg/user.htm?name=` + data[i].name);
        anchor.append(text);
        li.append(anchor);

        ol.appendChild(li);
    }

    document.getElementById('users').appendChild(ol)
}

function getDetailedUsers() {
    console.log(allData)
    document.getElementById('users').innerText = ""
    var data = allData;
    let ol = document.createElement('ol');
    for (key in data) {

        let li = document.createElement('li');
        text = document.createTextNode(JSON.stringify(data[key]));

        li.append(text);

        ol.appendChild(li);
    }

    document.getElementById('users').appendChild(ol);
}