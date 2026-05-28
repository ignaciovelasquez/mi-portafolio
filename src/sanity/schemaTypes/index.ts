import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import sandbox from './sandbox'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, sandbox],
}
