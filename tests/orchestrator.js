import retry from "async-retry";

async function waitForAllServices() {
  await waitForServer();

  async function waitForServer() {
    return retry(
      async () => {
        await fetch("http://localhost:3000/api/v1/status");
      },
      {
        retries: 100,
        maxTimeout: 1000, //1 second
      }
    );
  }
}

export default { waitForAllServices };
