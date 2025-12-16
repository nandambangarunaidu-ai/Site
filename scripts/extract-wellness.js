const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const docxPath = path.join(__dirname, '..', 'public', 'Wellness.docx');

mammoth.extractRawText({ path: docxPath })
  .then(result => {
    const text = result.value;
    console.log(text.trim());
  })
  .catch(err => {
    console.error('Error extracting docx:', err);
    process.exit(1);
  });
