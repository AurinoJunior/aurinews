import retry from "async-retry";
import database from "infra/database.js";

async function waitForAllServices() {
  await waitForServer();

  async function waitForServer() {
    const fetchStatus = async () => {
      const response = await fetch("http://localhost:3000/api/v1/status");
      if (!response.ok) {
        throw new Error("/status is not ok!!!");
      }
    };

    return retry(fetchStatus, {
      retries: 100,
      maxTimeout: 1000, //1 second
      onRetry: (error, attempt) => {
        console.error(`${attempt} error:: ${error.message}`);
      },
    });
  }
}

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

export default { waitForAllServices, clearDatabase };
