import { readFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

const filePath = 'Prathamesh-Khairnar-FlowCV-Resume-20260220 1.pdf';
const dataBuffer = readFileSync(filePath);

pdfParse(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(err) {
    console.error(err);
});
