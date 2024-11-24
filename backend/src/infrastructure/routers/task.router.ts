import { Router } from 'express'
import { taskController } from '../controllers/task.controller.js'

const router = Router()

router.get('/', taskController.getAll)

router.get('/:id', taskController.genOneById)

router.post('/', taskController.createOne)

router.patch('/:id', taskController.editOne)

router.delete('/:id', taskController.deleteOne)

export const taskRouter = router
