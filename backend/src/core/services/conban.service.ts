import { type Conban } from '../entities/conban.entity.js'
import { type EditBodyDto, type ConbanRepository } from '../repositories/conban.repository.js'

export class ConbanService {
    constructor(private readonly conbanRepository: ConbanRepository) {}

    getAll = async () => {
        return await this.conbanRepository.getAll()
    }

    getOneById = async (conbanId: string) => {
        return await this.conbanRepository.getOneById(conbanId)
    }

    createOne = async (createBodyDto: Omit<Conban, 'conbanId'>) => {
        return await this.conbanRepository.createOne(createBodyDto)
    }

    editOne = async (conbanId: string, editBodyDto: EditBodyDto) => {
        return await this.conbanRepository.editOne(conbanId, editBodyDto)
    }

    deleteOne = async (conbanId: string) => {
        return await this.conbanRepository.deleteOne(conbanId)
    }
}
