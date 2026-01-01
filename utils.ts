import fs from "fs";
import path from "path";

export const isTestEnv = process.argv.includes('--test')

export function getDataFilePath(dataPath: string, dataTestPath: string): string {
  return isTestEnv
    ? path.resolve(__dirname, dataTestPath)
    : path.resolve(__dirname, dataPath);
}

export function readData<T>(dataPath: string, dataTestPath: string): T {
  const filePath = getDataFilePath(dataPath, dataTestPath);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent as T;
}