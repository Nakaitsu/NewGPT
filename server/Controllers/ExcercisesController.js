import Exercise from "../database/models/Exercise.js"

export const getAll = async (req, res) => {
  let result = [];
  
  try {
    // if(req.user.role === 'instructor') {
      result = await Exercise.findAll({})
    // }
    // else if (req.user.role === 'student') {
    //   result = await Exercise.findAll()
    // }

    if(result.length > 0)
      res.status(200).send(result)
    else
      res.status(404).send(result)
  }
  catch(error) {
    res.status(500).send({ error })
  }
}

export const getById = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({
      where: {
        id: req.params.id
      }
    })

    if(exercise)
      res.status(200).send(exercise)
    else
      res.status(404).send({ msg: `Nenhuma atividade não encontrada para o id: ${req.params.id}` })
  }
  catch(error) {
    res.status(500).send(error)
  }
}

export const add = async (req, res) => {
  try {
    const exercise = await Exercise.build(req.body)
    const result = await exercise.save()
    res.status(200).send(result)
  }
  catch(error) {
    res.status(500).send(error)
  }
}

export const update = async (req, res) => {
  try {
    console.log('update called')

    const result = await Exercise.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).send(result)
  }
  catch(error) {
    res.status(500).send(error)
  }
}

export const remove = async (req, res) => {
  try {
    const exercise = await Exercise.findOne({
      where: {
        id: req.params.id
      }
    })

    if(exercise) {
      await Exercise.destroy({
        where: { 
          id: exercise.id
        }
      })

      res.status(200).send({ msg: 'Operação realizada com sucesso!' })
    }
    else
      res.status(404).send({ error: 'Atividade não encontrada!' })
  }
  catch(error) {
    res.status(500).send(error)
  }
}