const app = require('electron');
const dialog = app.dialog;
const fs = require('fs');
const docx = require('docx');

const getBlocks = require('./blocks/getblocks');

const { Document, Packer, Paragraph, TextRun} = docx;

// const getFullValues = require('./full_values');


class DecisionCreate extends Document {
  constructor(data) {
      super();
      this.data = data;
      this.blocks = getBlocks(this.data);
      this.doc = new Document();
  }

  create() {
    console.log(this.blocks)
    for (var key in this.blocks) {
      let paragraph = this.blocks[key](this.data);
      this.doc.addParagraph(paragraph);
    }
  }

  save() {
    dialog.showSaveDialog((fileName) => {
      if (fileName === undefined){
        return;
      }

      var packer = new Packer();

      packer.toBuffer(this.doc).then((buffer) => {
        fs.writeFileSync(`${fileName}.docx`, buffer);
        console.log("Document created successfully");
      }).catch((e) => {
        console.log(e)
      });    
    })
  }
}

module.exports = DecisionCreate;