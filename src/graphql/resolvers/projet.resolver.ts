import { ProjetModel } from '../../models/projet.model.js';

export default {
  Query: {
    projets: async () => await ProjetModel.find().lean(),
    projet: async (_: any, { id }: { id: string }) => await ProjetModel.findById(id).lean(),
  },
  Mutation: {
    createProjet: async (_: any, { input }: { input: any }) => {
      const doc = await ProjetModel.create(input);
      return doc.toObject();
    },
    updateProjet: async (_: any, { id, input }: { id: string; input: any }) =>
      await ProjetModel.findByIdAndUpdate(id, input, { new: true }).lean(),
    deleteProjet: async (_: any, { id }: { id: string }) => !!(await ProjetModel.findByIdAndDelete(id)),
  },
};
