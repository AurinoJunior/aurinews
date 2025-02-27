import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

function UpdatedAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000, // Lembrando que o deduping e 2s por default
  });

  if (isLoading) {
    return <h2>Carregando informações...</h2>;
  }

  return (
    <div>
      <h2>Database</h2>
      <p>
        Ultima atualização: {new Date(data.updated_at).toLocaleString("pt-BR")}
      </p>
      <p>
        Conexões com abertas: {data.dependencies.database.opened_connections}
      </p>
      <p>
        Maximo de conexões permitidas:{" "}
        {data.dependencies.database.max_connections}
      </p>
    </div>
  );
}

export default function StatusPage() {
  return (
    <>
      <h1>Status page</h1>
      <UpdatedAt />
    </>
  );
}
