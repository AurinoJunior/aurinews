describe("GET /api/v1/migrations", () => {
  it("should return 200 when get /migrations", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations")

    const responseBody = await response.json()
    console.log(responseBody)

    expect(response.status).toBe(200)
    expect(Array.isArray(responseBody)).toBe(true)
  })
})

describe.only("POST /api/v1/migrations", () => {
  it("should return 200 when get /migrations", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST"
    })

    const responseBody = await response.json()
    console.log(responseBody)

    expect(response.status).toBe(200)
    expect(Array.isArray(responseBody)).toBe(true)
  })
})
