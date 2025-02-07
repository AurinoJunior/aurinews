import retry from "async-retry";

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

export default { waitForAllServices };
