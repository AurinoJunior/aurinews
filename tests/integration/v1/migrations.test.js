import database from "infra/database.js"

beforeAll(cleanDatabase)

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;")
}

describe("GET /api/v1/migrations", () => {
  it("should return 200 when get /migrations", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations")

    const responseBody = await response.json()

    expect(response.status).toBe(200)
    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBeGreaterThan(0)
  })
})

describe("POST /api/v1/migrations", () => {
  it("should return 201 when run migration", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST"
    })

    const responseBody = await response.json()

    expect(response.status).toBe(201)
    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBeGreaterThan(0)
  })

  it("should return 200 when there is not more migrations to run", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST"
    })

    const responseBody = await response.json()

    expect(response.status).toBe(200)
    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBe(0)
  })
})
