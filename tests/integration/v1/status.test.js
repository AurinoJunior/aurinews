
describe("/api/v1/status", () => {
  it("should return 200 when get /status", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status")
    const body = await response.json()

    expect(response.status).toBe(200)
    expect(body.dependencies.database.version).toContain("PostgreSQL 16.0")
    expect(body.dependencies.database.max_connections).toBe(100)
  })
})