import * as fs from "fs";
import { promisify } from "util";
const promises = fs.promises;

function maybePromisify<T extends Function>(fn: T | undefined | null) {
    if (fn == null) {
        return fn;
    }
    return promisify(fn);
}
export const access = promises.access ?? promisify(fs.access);
export const appendFile = promises.appendFile ?? promisify(fs.appendFile);
export const chmod = promises.chmod ?? promisify(fs.chmod);
export const chown = promises.chown ?? promisify(fs.chown);
export const link = promises.link ?? promisify(fs.link);
export const mkdir = promises.mkdir ?? promisify(fs.mkdir);
export const mkdtemp = promises.mkdtemp ?? promisify(fs.mkdtemp);
export const open = promises.open ?? promisify(fs.open);
export const read = promises.read ?? promisify(fs.read);
export const readdir = promises.readdir ?? promisify(fs.readdir);
export const readFile = promises.readFile ?? promisify(fs.readFile);
export const readlink = promises.readlink ?? promisify(fs.readlink);
export const realpath = promises.realpath ?? promisify(fs.realpath);
export const rename = promises.rename ?? promisify(fs.rename);
export const rmdir = promises.rmdir ?? promisify(fs.rmdir);
export const stat = promises.stat ?? promisify(fs.stat);
export const symlink = promises.symlink ?? promisify(fs.symlink);
export const truncate = promises.truncate ?? promisify(fs.truncate);
export const unlink = promises.unlink ?? promisify(fs.unlink);
export const utimes = promises.utimes ?? promisify(fs.utimes);
export const write = promises.write ?? promisify(fs.write);
export const writeFile = promises.writeFile ?? promisify(fs.writeFile);

// functions that don't have built-in promisified functions already
export const close = (promises as any).close ?? promisify(fs.close);

// functions that may not be available on every operating system
export const fchmod = promises.fchmod ?? maybePromisify(fs.fchmod);
export const fchown = promises.fchown ?? maybePromisify(fs.fchown);
export const fdatasync = promises.fdatasync ?? maybePromisify(fs.fdatasync);
export const fstat = promises.fstat ?? maybePromisify(fs.fstat);
export const fsync = promises.fsync ?? maybePromisify(fs.fsync);
export const ftruncate = promises.ftruncate ?? maybePromisify(fs.ftruncate);
export const futimes = promises.futimes ?? maybePromisify(fs.futimes);
export const lchmod = promises.lchmod ?? maybePromisify(fs.lchmod);
export const lchown = promises.lchown ?? maybePromisify(fs.lchown);
export const lstat = promises.lstat ?? maybePromisify(fs.lstat);
