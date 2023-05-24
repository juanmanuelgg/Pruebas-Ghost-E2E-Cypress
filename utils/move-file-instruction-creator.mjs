#!/usr/bin/env node

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

function readInput() {
    const rl = readline.createInterface({ input, output, terminal: false });

    rl.on('line', function (line) {
        try {
            let auxFileName = line;
            auxFileName = auxFileName
                .replace('/e2e/', '/')
                .replace('/cypress/', '/')
                .replace('/screenshots/', '/')
                .replace('./tests/', './screenshots/');

            const aux = auxFileName.split('/');
            const justDirectories = ['vrt', 'ghost-resemble'];
            for (let i = 0; i < aux.length - 1; i++)
                justDirectories.push(aux[i]);

            // Swap folders
            const temp = justDirectories[justDirectories.length - 1];
            justDirectories[justDirectories.length - 1] =
                justDirectories[justDirectories.length - 2];
            justDirectories[justDirectories.length - 2] = temp;

            // new location
            const newFolderName = justDirectories.join('/');

            // new Filename
            justDirectories.push(aux[aux.length - 1]);
            const newFileName = justDirectories.join('/');

            console.log(
                `mkdir -p '${newFolderName}' && mv '${line}' '${newFileName}'`
            );
        } catch (error) {
            console.error(error);
        }
    }).on('close', () => {
        process.exit();
    });
}

readInput();
