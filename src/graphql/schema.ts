import { gql } from 'graphql-tag';
import baseTypeDefs from './base.schema.js';
import userTypeDefs from './user.schema.js';
import socialTypeDefs from './social.schema.js';
import experienceTypeDefs from './experience.schema.js';
import competenceTypeDefs from './competence.schema.js';
import projetTypeDefs from './projet.schema.js';
import formationTypeDefs from './formation.schema.js';
import documentTypeDefs from './document.schema.js';
import visitorTypeDefs from './visitor.schema.js';
import authTypeDefs from './auth.schema.js';

export const typeDefs = gql`
  ${baseTypeDefs}
  ${userTypeDefs}
  ${socialTypeDefs}
  ${experienceTypeDefs}
  ${competenceTypeDefs}
  ${projetTypeDefs}
  ${formationTypeDefs}
  ${documentTypeDefs}
  ${visitorTypeDefs}
  ${authTypeDefs}
`;
