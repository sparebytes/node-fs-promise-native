import * as fs from "fs";
import { promisify } from "util";
const promises = fs.promises;

function maybePromisify<T extends Function>(fn: T | undefined | null) {
  if (fn == null) {
    return fn;
  }
  return promisify(fn);
}

// functions that might have built-in promisified functions already
export const access: typeof promises.access = promises.access ?? promisify(fs.access);
export const appendFile: typeof promises.appendFile = promises.appendFile ?? promisify(fs.appendFile);
export const chmod: typeof promises.chmod = promises.chmod ?? promisify(fs.chmod);
export const chown: typeof promises.chown = promises.chown ?? promisify(fs.chown);
export const link: typeof promises.link = promises.link ?? promisify(fs.link);
export const mkdir: typeof promises.mkdir = promises.mkdir ?? promisify(fs.mkdir);
export const mkdtemp: typeof promises.mkdtemp = promises.mkdtemp ?? promisify(fs.mkdtemp);
export const open: typeof promises.open = promises.open ?? promisify(fs.open);
export const read: typeof promises.read = promises.read ?? promisify(fs.read);
export const readdir: typeof promises.readdir = promises.readdir ?? promisify(fs.readdir);
export const readFile: typeof promises.readFile = promises.readFile ?? promisify(fs.readFile);
export const readlink: typeof promises.readlink = promises.readlink ?? promisify(fs.readlink);
export const realpath: typeof promises.realpath = promises.realpath ?? promisify(fs.realpath);
export const rename: typeof promises.rename = promises.rename ?? promisify(fs.rename);
export const rmdir: typeof promises.rmdir = promises.rmdir ?? promisify(fs.rmdir);
export const stat: typeof promises.stat = promises.stat ?? promisify(fs.stat);
export const symlink: typeof promises.symlink = promises.symlink ?? promisify(fs.symlink);
export const truncate: typeof promises.truncate = promises.truncate ?? promisify(fs.truncate);
export const unlink: typeof promises.unlink = promises.unlink ?? promisify(fs.unlink);
export const utimes: typeof promises.utimes = promises.utimes ?? promisify(fs.utimes);
export const write: typeof promises.write = promises.write ?? promisify(fs.write);
export const writeFile: typeof promises.writeFile = promises.writeFile ?? promisify(fs.writeFile);

// functions that don't have built-in promisified functions already
export const close: (fd: number) => Promise<void> = (promises as any).close ?? promisify(fs.close);

// functions that may not be available on every operating system
export const fchmod: typeof promises.fchmod | undefined = promises.fchmod ?? maybePromisify(fs.fchmod);
export const fchown: typeof promises.fchown | undefined = promises.fchown ?? maybePromisify(fs.fchown);
export const fdatasync: typeof promises.fdatasync | undefined = promises.fdatasync ?? maybePromisify(fs.fdatasync);
export const fstat: typeof promises.fstat | undefined = promises.fstat ?? maybePromisify(fs.fstat);
export const fsync: typeof promises.fsync | undefined = promises.fsync ?? maybePromisify(fs.fsync);
export const ftruncate: typeof promises.ftruncate | undefined = promises.ftruncate ?? maybePromisify(fs.ftruncate);
export const futimes: typeof promises.futimes | undefined = promises.futimes ?? maybePromisify(fs.futimes);
export const lchmod: typeof promises.lchmod | undefined = promises.lchmod ?? maybePromisify(fs.lchmod);
export const lchown: typeof promises.lchown | undefined = promises.lchown ?? maybePromisify(fs.lchown);
export const lstat: typeof promises.lstat | undefined = promises.lstat ?? maybePromisify(fs.lstat);
