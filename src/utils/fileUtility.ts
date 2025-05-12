import fs from 'fs/promises';
import path from 'path';

class FileUtility<T> {
  constructor(entity: string) {
    this.filePath = path.join(process.cwd(), 'data', `${entity}.json`);
  }

  private filePath: string;

  private checkPath = async () => {
    try {
      await fs.access(path.join(process.cwd(), 'data'));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd(), 'data'));
    }
  }

  private checkFile = async () => {
    try {
      await fs.access(this.filePath);
    } catch (error) {
      await fs.writeFile(this.filePath, '[]');
    }
  }
  
  read = async () => {
    await this.checkPath();
    await this.checkFile();

    const data = await fs.readFile(this.filePath, 'utf-8');
    return JSON.parse(data);
  }

  write = async (data: T) => {
    await this.checkPath();
    await this.checkFile();
    
    await fs.writeFile(this.filePath, JSON.stringify(data));
  }
}

export default FileUtility;