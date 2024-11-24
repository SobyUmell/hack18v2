import { Router } from 'express'
import { subTaskController } from '../controllers/subtask.controller.js'

const router = Router()

router.get('/:taskId', subTaskController.getAll)

router.post('/', subTaskController.createOne)

router.patch('/:id', subTaskController.editOne)

router.delete('/:id', subTaskController.deleteOne)

export const subTaskRouter = router
