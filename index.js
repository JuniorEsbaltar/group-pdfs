const PDFMerge = require('pdf-merger-js');
const path = require('path');
const fs = require('fs');

const merge = new PDFMerge;
const directory = path.join(__dirname, 'pdfs');

const doMerge = async () => {
    fs.readdir(directory, async (err, files) => {
        if (err) {
            return console.log('Deu erro cara');
        }
        files.forEach((file) => {
            const data = fs.readFileSync(`./pdfs/${file}`);
            merge.add(data);
        });

        await merge.save('merged.pdf');
    });
}

doMerge();
