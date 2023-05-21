#!/bin/bash

# Pruebas E2E de la version 3.41.1 de ghost

npm run docker:up -- -g '3.41.1' -p '8081'
npm run test:e2e:cypress -- --env GHOST_VERSION='3.41.1',GHOST_PORT='8081'
# npm run docker:down -- -g '3.41.1'

# Cambiar la ubicación de los screenshots
npm run retrieve:screenshots -- -g '3.41.1'

# Pruebas E2E de la version 4.40.0 de ghost

npm run docker:up -- -g '4.40.0' -p '8082'
npm run test:e2e:cypress -- --env GHOST_VERSION='4.40.0',GHOST_PORT='8082'
# npm run docker:down -- -g '4.40.0'

# Cambiar la ubicación de los screenshots
npm run retrieve:screenshots -- -g '4.40.0'
npm run test:vrt