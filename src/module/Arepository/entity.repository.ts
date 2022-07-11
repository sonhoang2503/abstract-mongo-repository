import { Document, Model, FilterQuery, UpdateQuery } from 'mongoose';

export abstract class EntityRepository<T extends Document> {
  constructor(protected readonly entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this.entityModel
      .findOne(entityFilterQuery, {
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery);
  }

  async create(createEntityData: unknown): Promise<T> {
    const entity = new this.entityModel(createEntityData);
    return entity.save();
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      { new: true, runValidators: true },
    );
  }

  async findOneAndDelete(entityFilterQuery: FilterQuery<T>): Promise<void> {
    return this.entityModel.findByIdAndDelete(entityFilterQuery);
  }

  async deleteMany(entityFilterQuery?: FilterQuery<T>): Promise<number> {
    const deleteResult = this.entityModel.deleteMany(entityFilterQuery);
    return (await deleteResult).deletedCount;
  }
}
