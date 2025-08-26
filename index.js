const fs = require('fs');
const path = require('path');

async function file(filePath) {
    try {
        // Kiểm tra phần mở rộng của file
        const ext = path.extname(filePath).toLowerCase();

        // Chỉ cho phép .doc và .docx
        if (ext !== '.doc' && ext !== '.docx' && ext !== '.txt' && ext !== '.json') {
            console.error(`❌ Unsupported file formats: ${ext}`);
            return;
        }

        // Đọc nội dung file
        const data = fs.readFileSync(filePath);

        // Hiển thị nội dung (buffer)
        console.log(`📄 File read: ${filePath}`);
        console.log(data.toString());
    } catch (err) {
        console.error(`📄 Error reading file: ${filePath}`, err);
    }
}
modue.exports = file;
