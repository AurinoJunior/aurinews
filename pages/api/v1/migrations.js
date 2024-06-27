import migrationRunner from "node-pg-migrate"
import { join } from "node:path"

export default async function (request, response) {
  const migrationOptions = {
    databaseUrl: process.env.DATABASE_URL,
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
    return response.status(200).json(penddingMigrations);
  }

  if(request.method === "POST") {
    const runMigrations = await migrationRunner(migrationOptions)

    if(runMigrations.length > 0){
      return response.status(201).json(runMigrations);
    }
    return response.status(200).json(runMigrations);
  }

  return response.status(405)
}
