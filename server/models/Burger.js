import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const BurgerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

}),
{timestamps: true, toJSON: {virtuals: true}})

AssignmentSchema.virtual('customer', {
  localField: 'customerId',
  ref: 'Student',
  foreignField: '_id',
  justOne: true
})

