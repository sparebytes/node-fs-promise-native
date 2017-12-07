import * as fs from 'fs';
import * as util from 'util';

export const access = util.promisify(fs.access);
export const appendFile = util.promisify(fs.appendFile);
export const chmod = util.promisify(fs.chmod);
export const chown = util.promisify(fs.chown);
export const close = util.promisify(fs.close);
export const link = util.promisify(fs.link);
export const mkdir = util.promisify(fs.mkdir);
export const mkdtemp = util.promisify(fs.mkdtemp);
export const open = util.promisify(fs.open);
export const read = util.promisify(fs.read);
export const readdir = util.promisify(fs.readdir);
export const readFile = util.promisify(fs.readFile);
export const readlink = util.promisify(fs.readlink);
export const realpath = util.promisify(fs.realpath);
export const rename = util.promisify(fs.rename);
export const rmdir = util.promisify(fs.rmdir);
export const stat = util.promisify(fs.stat);
export const symlink = util.promisify(fs.symlink);
export const truncate = util.promisify(fs.truncate);
export const unlink = util.promisify(fs.unlink);
export const utimes = util.promisify(fs.utimes);
export const write = util.promisify(fs.write);
export const writeFile = util.promisify(fs.writeFile);

/** @deprecated */
export const exists = util.promisify(fs.exists);

// functions that may not be available on every operating system:
export const fchmod = fs.fchmod == null ? undefined : util.promisify(fs.fchmod);
export const fchown = fs.fchown == null ? undefined : util.promisify(fs.fchown);
export const fdatasync = fs.fdatasync == null ? undefined : util.promisify(fs.fdatasync);
export const fstat = fs.fstat == null ? undefined : util.promisify(fs.fstat);
export const fsync = fs.fsync == null ? undefined : util.promisify(fs.fsync);
export const ftruncate = fs.ftruncate == null ? undefined : util.promisify(fs.ftruncate);
export const futimes = fs.futimes == null ? undefined : util.promisify(fs.futimes);
export const lchmod = fs.lchmod == null ? undefined : util.promisify(fs.lchmod);
export const lchown = fs.lchown == null ? undefined : util.promisify(fs.lchown);
export const lstat = fs.lstat == null ? undefined : util.promisify(fs.lstat);
