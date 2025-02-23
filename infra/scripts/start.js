const { spawn } = require("node:child_process");
spawn("next dev", { stdio: "inherit", shell: true });

function servicesStop() {
  console.warn("Encerrando...");

  spawn("yarn services:stop", {
    detached: true,
    shell: true,
    windowsHide: true,
    stdio: "ignore",
  });
}

process.on("SIGINT", servicesStop);
process.on("SIGTERM", servicesStop);
