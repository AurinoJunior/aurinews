import migrationRunner from "node-pg-migrate"
import { join } from "node:path"
import database from "infra/database.js"

export default async function (request, response) {
  const client = await database.getNewClient()

  const migrationOptions = {
    dbClient: client,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations"
  }

  if(request.method === "GET") {
    const penddingMigrations = await migrationRunner({
      ...migrationOptions,
      dryRun: true
    })
    await client.end()

    return response.status(200).json(penddingMigrations);
  }

  if(request.method === "POST") {
    const runMigrations = await migrationRunner(migrationOptions)
    await client.end()

    if(runMigrations.length > 0){
      return response.status(201).json(runMigrations);
    }
    return response.status(200).json(runMigrations);
  }

  await client.end()
  return response.status(405)
}
