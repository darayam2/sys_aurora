let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(data=>data.json())
    .then(data=>showdata(data))
    .catch(error=>console.log("Error encontrado:",error))

const showdata = (data) => {
    let body = ''
    for(let i = 0; i < data.length; i++){
        body+=`<tr>
                    <td>DNI</td>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].username}</td>
                    <td>Mascota</td>
                    <td>Puppy</td>
                    <td>${data[i].phone}</td>
               </tr>`
    }
    document.getElementById("data").innerHTML = body
}


// let url1 = 'https://randomuser.me/api/?results=20'

// fetch(url1)
//     .then(url1Data=>url1Data.json())
//     .then(url1Data=>showUsers(url1Data))
//     .catch(error=>console.log("Error encontrado:",error))

// const showUsers = (url1Data) => {
//     let body2 = ''
//     for(let i = 0; i < url1Data.results.length; i++){
//         body2 +=`<tr>
//                     <td>DNI</td>
//                     <td>${url1Data.results[i].location.postcode}</td>
//                     <td>${url1Data.results[i].name.first}</td>
//                     <td>${url1Data.results[i].name.last}</td>
//                     <td>${url1Data.results[i].email}</td>
//                     <td>${url1Data.results[i].login.password}</td>
//                     <td>${url1Data.info.seed}</td>
//                     <td>Puppy</td>
//                     <td>${url1Data.results[i].cell}</td>
//                 </tr>`
//     }
//     document.getElementById("data2").innerHTML = body2
// }