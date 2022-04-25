var data;

var xhr = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
xhr.response = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let json = JSON.parse(xhr.responseText);
        data = json;
        let ul = document.createElement('ol')
        for (key in json) {

            let li = document.createElement('li')
            text = document.createTextNode(JSON.stringify(json[key].name))
            // li.append(text)

            let anchor = document.createElement('a');
            anchor.setAttribute("href", `http://127.0.0.1:5500/ajax-assg/user.htm?name=`+json[key].name);
            anchor.append(text)
            li.append(anchor)

            ul.appendChild(li)
        }

        document.getElementById('dataDiv').appendChild(ul)
    }
};
xhr.open("GET", url, true);
xhr.send()


function getFive() {

}

