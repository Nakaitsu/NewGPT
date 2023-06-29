class UserService {
  constructor() {
    this.endpoint = 'http://localhost:5000/users'
  }

  async getUser() {
    let response = await fetch(this.endpoint, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        authorization: localStorage.getItem('userToken')
      }
    })
    
    // if(response.ok)
      return response.json()
  }
}

export default new UserService()
