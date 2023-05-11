import * as Mongoose from 'mongoose'

export const schemaVirtuals = <TDocument extends Mongoose.Document = any>(schema: Mongoose.Schema<TDocument>) => {
  // Duplicate the ID field.
  schema.virtual('id').get(function () {
    return this._id.toHexString();
  });

  // Ensure virtual fields are serialised.
  schema.set('toJSON', { virtuals: true });

  // To be able to see virtuals in output when using console.log(obj)
  schema.set('toObject', { virtuals: true })
}