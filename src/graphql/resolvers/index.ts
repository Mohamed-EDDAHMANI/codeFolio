import { GraphQLScalarType, Kind } from 'graphql';
import userResolvers from './user.resolver.js';
import socialResolvers from './social.resolver.js';
import experienceResolvers from './experience.resolver.js';
import competenceResolvers from './competence.resolver.js';
import projetResolvers from './projet.resolver.js';
import formationResolvers from './formation.resolver.js';
import documentResolvers from './document.resolver.js';
import visitorResolvers from './visitor.resolver.js';

// Simple ISO Date scalar
const DateScalar = new GraphQLScalarType({
	name: 'Date',
	description: 'ISO-8601 Date scalar',
	serialize(value: any) {
		if (value instanceof Date) return value.toISOString();
		if (typeof value === 'string') return new Date(value).toISOString();
		return null;
	},
	parseValue(value: any) {
		return value ? new Date(value) : null;
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.STRING) return new Date(ast.value);
		return null;
	},
});

export const resolvers = [
	{ Date: DateScalar },
	userResolvers,
	socialResolvers,
	experienceResolvers,
	competenceResolvers,
	projetResolvers,
	formationResolvers,
	documentResolvers,
	visitorResolvers,
];
