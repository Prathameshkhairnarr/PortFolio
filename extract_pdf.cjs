const { readFileSync } = require('fs');
const { getDocument } = require('pdfjs-dist/legacy/build/pdf.js');

async function extractPDF() {
    const data = new Uint8Array(readFileSync('Prathamesh-Khairnar-FlowCV-Resume-20260220 1.pdf'));
    const doc = await getDocument({ data }).promise;
    
    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n\n';
    }
    
    console.log(fullText);
}

extractPDF().catch(console.error);
