export async function loginUser(credentials){
    return fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default loginUser;