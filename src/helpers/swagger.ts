import * as YAML from 'yamljs';
import * as fs from 'fs'
import * as path from 'path';

const docs = fs.readFileSync(path.resolve(__dirname, '../../doc/api.yaml'), 'utf-8');

const document = YAML.parse(docs);

export const config = document;

