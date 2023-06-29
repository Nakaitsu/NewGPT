import { Router } from 'express'
import { getAll, add, update, remove, getById } from '../Controllers/ExcercisesController.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', add)
router.put('/:id', update)
router.delete('/:id', remove)

export default router