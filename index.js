const getWorker = require('tesseract.js-node');
async function test(){
const worker = await getWorker({
  tessdata: 'tessdata',    // where .traineddata-files are located
  languages: ['eng', 'fin']         // languages to load
});
const text = await worker.recognize('aadhar1.png', 'eng');
console.log(text);
}

test();
