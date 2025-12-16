import mammoth from 'mammoth';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docxPath = path.join(__dirname, '..', 'public', 'Wellness.docx');

try {
  const result = await mammoth.extractRawText({ path: docxPath });
  const text = result.value;
  console.log(text.trim());
} catch (err) {
  console.error('Error extracting docx:', err);
  process.exit(1);
}
