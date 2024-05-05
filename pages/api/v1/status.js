import database from "infra/database"

export default async function (request, response) {
  const updateAt = new Date().toISOString();
  const dbVersion = await database.query("SELECT version();");
  const dbMaxConnection = await database.query("SHOW max_connections;");
  

  return response.status(200).json({
    updated_at: updateAt,
    dependencies: {
      database: {
        version: dbVersion.rows[0].version,
        max_connections: parseInt(dbMaxConnection.rows[0].max_connections),
      }
    },
  })
}
