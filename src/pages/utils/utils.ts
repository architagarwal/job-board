import fs from 'fs';

export const getData = (filePath: string) => {
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  }
  return {};
}