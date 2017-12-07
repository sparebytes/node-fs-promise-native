import * as fspn from './index';

describe('functions are defined', () => {
    test('access is defined', async () => fspn.access != null);
    test('appendFile is defined', async () => fspn.appendFile != null);
    test('chmod is defined', async () => fspn.chmod != null);
    test('chown is defined', async () => fspn.chown != null);
    test('close is defined', async () => fspn.close != null);
    test('link is defined', async () => fspn.link != null);
    test('mkdir is defined', async () => fspn.mkdir != null);
    test('mkdtemp is defined', async () => fspn.mkdtemp != null);
    test('open is defined', async () => fspn.open != null);
    test('read is defined', async () => fspn.read != null);
    test('readdir is defined', async () => fspn.readdir != null);
    test('readFile is defined', async () => fspn.readFile != null);
    test('readlink is defined', async () => fspn.readlink != null);
    test('realpath is defined', async () => fspn.realpath != null);
    test('rename is defined', async () => fspn.rename != null);
    test('rmdir is defined', async () => fspn.rmdir != null);
    test('stat is defined', async () => fspn.stat != null);
    test('symlink is defined', async () => fspn.symlink != null);
    test('truncate is defined', async () => fspn.truncate != null);
    test('unlink is defined', async () => fspn.unlink != null);
    test('utimes is defined', async () => fspn.utimes != null);
    test('write is defined', async () => fspn.write != null);
    test('writeFile is defined', async () => fspn.writeFile != null);
});

describe('readFile', () => {
    test('read package.json', async () => {
        const packageJsonBuffer = await fspn.readFile('./package.json');
        const packageJson = JSON.parse(packageJsonBuffer.toString());
        expect(packageJson.name).toEqual('fs-promise-native');
    });
});
