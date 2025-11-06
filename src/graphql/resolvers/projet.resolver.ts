import { ProjetModel } from '../../models/projet.model.js';
import { GraphQLError } from 'graphql';

export default {
  Query: {
    projets: async () => await ProjetModel.find().lean(),
    projet: async (_: any, { _id }: { _id: string }) => {
      const doc = await ProjetModel.findById(_id).lean();
      if (!doc) {
        throw new GraphQLError('Projet not found', { extensions: { code: 'PROJET_NOT_FOUND' } });
      }
      return doc;
    },
  },
  Mutation: {
    createProjet: async (_: any, { input }: { input: any }) => {
      const doc = await ProjetModel.create(input);
      return doc.toObject();
    },
    updateProjet: async (_: any, { _id, input }: { _id: string; input: any }) =>
      await ProjetModel.findByIdAndUpdate(_id, input, { new: true }).lean(),
    deleteProjet: async (_: any, { _id }: { _id: string }) => !!(await ProjetModel.findByIdAndDelete(_id)),
  },
};
