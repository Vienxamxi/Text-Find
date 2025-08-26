# 📦 `text-find ` Usage Guide

**A lightweight Node.js package to read content from `.doc`, `.docx`, `.txt`, and `.json` files.**

> 🛠️ Created by \[Progamingsang]

---

## ✨ Features

* ✅ Read contents of `.doc`, `.docx`, `.txt`, and `.json` files
* ✅ Simple and synchronous file reading
* ✅ Helpful console output for debugging and clarity
* ✅ Zero dependency (only built-in `fs` and `path` modules)

---

## 📥 Installation

```bash
npm install text-find
```

---

## 📚 Usage

### 1. Import the package

```js
const file = require('text-find');
```

### 2. Use the function with a supported file path

```js
const filePath = 'example.docx'; // or .doc, .txt, .json
file(filePath);
```

### ✅ Example

Let's say you have a file named `data.docx` that contains the text:

```
Hello World
```

Your JavaScript file:

```js
const file = require('text-find');

const filePath = 'data.docx';

file(filePath);
```

**Console Output:**

```
📄 File read: data.docx
Hello World
```

---

## 📝 Supported File Formats

* `.doc`
* `.docx`
* `.txt`
* `.json`

If you try to read an unsupported file type, you'll receive an error message like:

```
❌ Unsupported file formats: .pdf
```

---

## ⚠️ Notes

* The current version reads `.doc` and `.docx` files as **buffers**, which may not always render readable text, especially for `.docx`. You might consider integrating packages like `mammoth` or `docx-parser` if you need structured parsing of Word documents.
* This package is **synchronous** (`fs.readFileSync`) for simplicity.

---


## 👤 Author

\[Progamingsang]

---

## 📄 License

Copyright © 2025 by Vienxamxi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
