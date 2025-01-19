import * as fs from 'node:fs';

function writeBinaryFile(): void {
    const buffer: Buffer = Buffer.alloc(8);
    buffer.writeInt32BE(42, 0);

    console.log(buffer);
}

writeBinaryFile();

/**
 * @param {string} file
 * @param {number} id
 * @param {number} age
 * @param {string} name
 */
function writeRecord(
    file: string,
    id: number,
    age: number,
    name: string,
): void {
    const nameBuffer: Buffer = Buffer.from(name, 'utf-8');
    const buffer: Buffer = Buffer.alloc(8 + nameBuffer.length);

    buffer.writeInt32BE(id, 0);
    buffer.writeInt32BE(age, 4);

    nameBuffer.copy(buffer, 8);

    fs.writeFileSync(file, buffer);

    console.log('Record written.');
}

/**
 * @param {string} file
 */
function readRecord(file: string): void {
    const buffer: Buffer = fs.readFileSync(file);

    const id: number = buffer.readInt32BE(0);
    const age: number = buffer.readInt32BE(4);

    const name: string = buffer.toString('utf-8', 8);

    console.log(`ID: ${id}, Age: ${age}, Name: ${name}`);
}

writeRecord('user.db', 1, 25, 'al');
readRecord('user.db');
