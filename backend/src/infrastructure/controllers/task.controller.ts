import { Request, Response, NextFunction } from 'express'
import { TaskService } from '../../core/services/task.service.js'
import { TaskRepositoryImpl } from '../db/repositories/task.repository.impl.js'
import { TaskModel } from '../db/entities/task.entity.js'
import { SubTaskModel } from '../db/entities/subtask.entity.js'

class TaskController {
    constructor(private readonly taskService: TaskService) {}

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const taskData = await this.taskService.getAll()
            res.json({ data: taskData })
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    genOneById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const taskData = await this.taskService.getOneById(id)
            res.json({ data: taskData })
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    createOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createBody = req.body
            const taskData = await this.taskService.createOne(createBody)
            res.status(201).json({ data: taskData })
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    editOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const editBody = req.body
            await this.taskService.editOne(id, editBody)
            res.status(200).end()
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    deleteOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            await this.taskService.deleteOne(id)
            res.status(200).end()
        } catch (err) {
            res.status(500).json({ err })
        }
    }
}

export const taskController = new TaskController(new TaskService(new TaskRepositoryImpl(TaskModel, SubTaskModel)))
