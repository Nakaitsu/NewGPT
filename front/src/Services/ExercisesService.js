class ExercisesService {
  constructor() {
    this.endpoint = 'http://localhost:5000/exercises'
  }

  async postData(exercise) {
    let response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(exercise)
    })

    if(response.ok)
      return await response.json()
  }

  async getAll() {
    let response = await fetch(this.endpoint, {
      method: 'GET'
    })

    if(response.ok)
      return await response.json()
    else if (response.status === 404)
      return []
  }

  async updateData(exercise) {
    if(exercise.id) {
      const url = this.endpoint + `/${exercise.id}`
  
      let response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(exercise)
      })
  
      if(response.ok)
        return await response.json()
      else if (response.status === 404)
        console.log(response.json())
    }
  }

  async remove(exercise) {
    if(exercise.id) {
      const url = this.endpoint + `/${exercise.id}`

      let response = await fetch(url, {
        method: 'DELETE',
      })

      if(response.ok)
        return await response.json()
      else if (response.status === 404)
        console.log(await response.json())
    }
  }

  async getHint(solution) {
    const url = 'http://localhost:5000/'

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        ...solution,
        type: 'hint'
      })
    })

    if(response)
      return await response.json()
    else
      console.log('Nenhuma dica retornada!')
  }

  async getSolutionOutput(solution) {
    const url = 'http://localhost:5000/'

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        ...solution,
        type: 'output'
      })
    })

    if(response)
      return await response.json()
    else
      console.log('Erro ao obter resultado da execução do código!')
  }

  async submitSolution(solution) {
    const url = 'http://localhost:5000/'

    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        ...solution,
        type: 'submit'
      })
    })

    if(response)
      return await response.json()
    else
      console.log('Problema ao enviar a resposta!')
  }

  async getById(id) {
    const url = this.endpoint + `/${id}`

    let response = await fetch(url, {
      method: 'GET'
    })

    if(response.ok)
      return await response.json()
    else if (response.status === 404)
      console.log('Atividade não encontrada!')
    else
      console.log('Erro no servidor ao pegar atividade!')
  }
}

export default new ExercisesService()