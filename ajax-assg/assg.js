var xhr = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';
xhr.response = 'json';
json = {}
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        json = JSON.parse(xhr.responseText);
        console.log(json);
        arrangeData(json)
        // console.log(typeof (json));
    }
};
xhr.open("GET", url, true);
xhr.send()


function arrangeData(data) {
        console.log(typeof (data));
        let ul = document.createElement('ul')
        for (key in data) {
            userName = data[key].name
            console.log(userName);
            // console.log(JSON.stringify(data[key]));
            let li = document.createElement('li')
            text = document.createTextNode(userName)
            li.append(text)
            li.setAttribute('id', data[key].id)
            let a = document.createElement('a')
            a.appendChild(li)
            a.setAttribute('href', 'userData.htm')
            ul.appendChild(li)
        }
        
    document.getElementById('dataDiv').appendChild(ul)
}

// function arrangeData(data) {
//     console.log(typeof (data));
//     let ul = document.createElement('ul')
//     for (key in data) {
//         console.log(data[key].name);
//         // console.log(JSON.stringify(data[key]));
//         let li = document.createElement('li')
//         text = document.createTextNode(JSON.stringify(data[key]))
//         li.append(text)
//         ul.appendChild(li)
//     }
    
//     document.getElementById('dataDiv').appendChild(ul)
// }