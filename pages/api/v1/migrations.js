import migrationRunner from "node-pg-migrate";
import { resolve } from "node:path";
import database from "infra/database.js";

export default async function (request, response) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).send();
  }

  let client;
  try {
    client = await database.getNewClient();
    const migrationOptions = {
      dbClient: client,
      dir: resolve("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
    };

    if (request.method === "GET") {
      const penddingMigrations = await migrationRunner({
        ...migrationOptions,
        dryRun: true,
      });

      return response.status(200).json(penddingMigrations);
    }

    if (request.method === "POST") {
      const runMigrations = await migrationRunner(migrationOptions);

      if (runMigrations.length > 0) {
        return response.status(201).json(runMigrations);
      }
      return response.status(200).json(runMigrations);
    }
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    await client.end();
  }
}
