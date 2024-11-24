import { getModelForClass, prop } from '@typegoose/typegoose'

class Conban {
    @prop()
    conbanId: string

    @prop()
    name: string
}

export const ConbanModel = getModelForClass(Conban)
