import * as fsp from './fsp';

describe('functions are defined', () => {
    test('access is defined', async () => fsp.access != null);
    test('appendFile is defined', async () => fsp.appendFile != null);
    test('chmod is defined', async () => fsp.chmod != null);
    test('chown is defined', async () => fsp.chown != null);
    test('close is defined', async () => fsp.close != null);
    test('link is defined', async () => fsp.link != null);
    test('mkdir is defined', async () => fsp.mkdir != null);
    test('mkdtemp is defined', async () => fsp.mkdtemp != null);
    test('open is defined', async () => fsp.open != null);
    test('read is defined', async () => fsp.read != null);
    test('readdir is defined', async () => fsp.readdir != null);
    test('readFile is defined', async () => fsp.readFile != null);
    test('readlink is defined', async () => fsp.readlink != null);
    test('realpath is defined', async () => fsp.realpath != null);
    test('rename is defined', async () => fsp.rename != null);
    test('rmdir is defined', async () => fsp.rmdir != null);
    test('stat is defined', async () => fsp.stat != null);
    test('symlink is defined', async () => fsp.symlink != null);
    test('truncate is defined', async () => fsp.truncate != null);
    test('unlink is defined', async () => fsp.unlink != null);
    test('utimes is defined', async () => fsp.utimes != null);
    test('write is defined', async () => fsp.write != null);
    test('writeFile is defined', async () => fsp.writeFile != null);
});

describe('readFile', () => {
    test('read package.json', async () => {
        const packageJsonBuffer = await fsp.readFile('./package.json');
        const packageJson = JSON.parse(packageJsonBuffer.toString());
        expect(packageJson.name).toEqual('fs-promise-native');
    });
});
