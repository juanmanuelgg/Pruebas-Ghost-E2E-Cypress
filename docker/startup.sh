#!/bin/bash -x

USAGE="Modo de uso: $0 [-g 'x.y.z' -p '****' ] [-h]      \n
	-u Ghost version                                                \n
	-p Ghost port                                                   \n
    -h Mostrar esta ayuda                                           \n
"

GHOST_VERSION=
GHOST_PORT=

function has_command() {
    command -v $1 > /dev/null
}

function processInvocation () {
    while getopts "g:p:h" opt; do
        case ${opt} in
            g) GHOST_VERSION=${OPTARG};;
            p) GHOST_PORT=${OPTARG};;
            h) echo -e ${USAGE}
                exit 0
                ;;
            *) echo -e ${USAGE} 1>&2
                exit 1
                ;;
        esac
    done

    if [ -z "${GHOST_VERSION}" ] || [ -z "${GHOST_PORT}" ]; then
        echo -e ${USAGE} 1>&2
        exit 1
    fi
}

function main () {
    export GHOST_VERSION
    export GHOST_PORT
    if has_command docker-compose; then
        docker-compose -f docker/docker-compose.yml up -d --build --remove-orphans
    else
        docker compose -f docker/docker-compose.yml up -d --build --remove-orphans
    fi
}

processInvocation $@
main