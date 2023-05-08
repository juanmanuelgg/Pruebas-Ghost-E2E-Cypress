#!/bin/bash

USAGE="Modo de uso: $0 [-g 'x.y.z' -m 'x.y.z'] [-h]     \n
	-g Ghost version                                    \n
	-m MySQL version                                    \n
    -h Mostrar esta ayuda                               \n
"

GHOST_VERSION=
MYSQL_VERSION=

function has_command() {
    command -v $1 > /dev/null
}

function processInvocation () {
    while getopts "g:m:h" opt; do
        case ${opt} in
            g) GHOST_VERSION=${OPTARG};;
            m) MYSQL_VERSION=${OPTARG};;
            h) echo -e ${USAGE}
                exit 0
                ;;
            *) echo -e ${USAGE} 1>&2
                exit 1
                ;;
        esac
    done

    if [ -z "${GHOST_VERSION}" ] || [ -z "${MYSQL_VERSION}" ]; then
        echo -e ${USAGE} 1>&2
        exit 1
    fi
}

function main () {
    export GHOST_VERSION
    export MYSQL_VERSION
    if has_command docker-compose; then
        docker-compose -f docker/docker-compose.yml down -v --rmi all
    else
        docker compose -f docker/docker-compose.yml down -v --rmi all
    fi
}

processInvocation $@
main