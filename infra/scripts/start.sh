#!/bin/bash

# Sobe os containers
yarn services:up
yarn services:wait:database
yarn migrations:up

# Captura SIGINT (CTRL+C) e derruba os containers ao sair
trap 'echo "Encerrando..."; yarn services:down; exit 0' SIGINT

# Inicia o Next e mantém o processo rodando
yarn next dev &

# Aguarda o Next rodar até ser interrompido
wait
