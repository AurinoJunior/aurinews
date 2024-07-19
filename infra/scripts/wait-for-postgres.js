const { exec } = require("node:child_process");

function handleReturn(error, stdout) {
  if (stdout.search("accepting connections") === -1) {
    process.stdout.write(".");
    checkPostgres();
    return;
  }
  process.stdout.write("\n🟢 Postgres está pronto e aceitando conexões!\n");
}

function checkPostgres() {
  exec("docker exec postgres_db pg_isready --host localhost", handleReturn);
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões");
checkPostgres();
