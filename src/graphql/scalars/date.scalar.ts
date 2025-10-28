import { GraphQLScalarType, Kind } from 'graphql';

export const DateScalar = new GraphQLScalarType({
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
