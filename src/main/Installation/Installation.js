import { execFile } from 'child_process';
import { join } from 'path';

class Installation {
    runInstaller(filePath, args = []) {
        return new Promise((resolve, reject) => {
            execFile(filePath, args, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }

    async installDotNet5() {
        const installerPath = join(
            process.resourcesPath,
            'installers', 'EXE',
            'dotnet5.exe' // nome real do arquivo
        );
        return this.runInstaller(installerPath, ['/quiet', '/norestart']);
    }

    async installDotNet8() {
        const installerPath = join(
            process.resourcesPath,
            'installers', 'EXE',
            'dotnet8.exe'
        );
        return this.runInstaller(installerPath, ['/quiet', '/norestart']);
    }

    async installCristal32Bits() {
        const installerPath = join(
            process.resourcesPath,
            'installers', 'MSI',
            'cristal32.msi'
        );
        // Para MSI, chamamos via msiexec
        return this.runInstaller('msiexec', ['/i', installerPath, '/quiet', '/norestart']);
    }

    async installCristal64Bits() {
        const installerPath = join(
            process.resourcesPath,
            'installers', 'MSI',
            'cristal64.msi'
        );
        return this.runInstaller('msiexec', ['/i', installerPath, '/quiet', '/norestart']);
    }
}

export default Installation;
