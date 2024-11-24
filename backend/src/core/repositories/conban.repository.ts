import { type Conban } from '../entities/conban.entity.js'

export class EditBodyDto {
    constructor(readonly name?: string) {}
}

export interface ConbanRepository {
    getAll(): Promise<Conban[]>
    getOneById(conbanId: string): Promise<Conban>
    createOne(createBodyDto: Omit<Conban, 'conbanId'>): Promise<Conban>
    editOne(conbanId: string, editBodyDto: EditBodyDto): Promise<void>
    deleteOne(conbanId: string): Promise<void>
}
