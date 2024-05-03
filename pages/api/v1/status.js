import database from "infra/database"

export default async function (request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;")
  return response.status(200).json({result: result.rows.sum})
}
