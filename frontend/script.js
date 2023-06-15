
function submeter() {
document.getElementById('form').addEventListener("submit", function(event){
    event.preventDefault()
    var data = document.getElementById('mensagem')
    var jj = data.value
    console.log(jj)
    var json_data = JSON.stringify({data: jj})
    const url = '/mensagem';    
    fetch(url, {
        method: 'POST',
        body: json_data,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log("Inserido com sucesso!")
    })
})
}

// function submeter() {
//     document.getElementById('form').addEventListener("submit", function(event){
//         event.preventDefault()
//         var data = document.getElementById('mensagem')
//         var jj = data.value
//         console.log(jj)
//         var json_data = JSON.stringify({data: jj})
//         const url = '/mensagem';    
//         fetch(url, {
//             method: 'POST',
//             body: json_data,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then((response) => {
//             console.log("Inserido com sucesso!")
//         })
//     })
//     }
