import { Application } from 'https://deno.land/x/oak/mod.ts'

import { GraphQLService } from './server.ts'

const app = new Application()

app.use(GraphQLService.routes(), GraphQLService.allowedMethods())

console.log('Server is running')

await app.listen({ port: 8000 })
