{ pkgs, ... }: {
  # Canais Nixpkgs a serem usados
  channel = "stable-23.11";

  # Pacotes a serem instalados
  packages = [
    pkgs.curl
    pkgs.yarn
    pkgs.docker
  ];

  env = {};
  services = {
    docker = {
      enable = true;
    };
  };
}
