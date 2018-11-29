'use strict'

const fs = require('fs');

export class FileIO {

  fileName: string;
  content: string;
  constructor(fileName: string) {
    this.fileName = fileName;
    this.readFromFile();
  }

  private readFromFile(): void {
    try {
      this.content = fs.readFileSync(this.fileName, 'utf-8');
    } catch (e) {
      console.log(e.message);
    }
  }

  writeToFile(content: string): void {
    if (fs.existsSync(this.fileName)) {
      fs.writeFileSync(this.fileName, content);
    } else {
      console.log('cant write to file');
    }
    this.content = content;
  }

  appendToFile(fileName: string, content: string): void {
    if (fs.existsSync(fileName)) {
      fs.appendFileSync(fileName, content);
    } else {
      console.log('cant write to file');
    }
    this.readFromFile();
  }

  getContent(): string {
    return this.content;
  }
}