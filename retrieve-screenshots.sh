#!/bin/bash

USAGE="Modo de uso: $0 [-g 'x.y.z' ] [-h]      \n
	-g Ghost version                           \n
    -h Mostrar esta ayuda                      \n
"

GHOST_VERSION=

function processInvocation () {
    while getopts "g:h" opt; do
        case ${opt} in
            g) GHOST_VERSION=${OPTARG};;
            h) echo -e ${USAGE}
                exit 0
                ;;
            *) echo -e ${USAGE} 1>&2
                exit 1
                ;;
        esac
    done

    if [ -z "${GHOST_VERSION}" ]; then
		echo -e ${USAGE} 1>&2
		exit 1
	fi
}

function main () {
    find tests -type f -name *.png | grep "${GHOST_VERSION}" | node ./utils/move-file-instruction-creator.mjs | sh
}

processInvocation $@
main
