import { Request, Response, NextFunction } from 'express'
import { SubTaskService } from '../../core/services/subtask.service.js'
import { SubTaskRepositoryImpl } from '../db/repositories/subtask.repository.impl.js'
import { SubTaskModel } from '../db/entities/subtask.entity.js'

class SubTaskController {
    constructor(private readonly subTaskService: SubTaskService) {}

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { taskId } = req.params
            const subTaskData = await this.subTaskService.getAll(taskId)
            res.json({ data: subTaskData })
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    createOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createBody = req.body
            const subTaskData = await this.subTaskService.createOne(createBody)
            res.status(201).json({ data: subTaskData })
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    editOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            const editBody = req.body
            await this.subTaskService.editOne(id, editBody)
            res.status(200).end()
        } catch (err) {
            res.status(500).json({ err })
        }
    }

    deleteOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            await this.subTaskService.deleteOne(id)
            res.status(200).end()
        } catch (err) {
            res.status(500).json({ err })
        }
    }
}

export const subTaskController = new SubTaskController(new SubTaskService(new SubTaskRepositoryImpl(SubTaskModel)))
