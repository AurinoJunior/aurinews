export class InternalServerError extends Error {
  constructor({ cause }) {
    super("Erro interno do servidor", {
      cause,
    });
    this.name = "InternalServerError";
    this.action = "Entre em contato com o suporte";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: 500,
    };
  }
}
