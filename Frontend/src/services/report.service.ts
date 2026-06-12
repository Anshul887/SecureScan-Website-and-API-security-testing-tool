import PDFDocument from "pdfkit";

import fs from "fs";

export async function generatePDF(
 scan:any,
 findings:any[]
){

 const path =
 `reports/${scan.id}.pdf`;

 const doc =
 new PDFDocument();

 doc.pipe(
  fs.createWriteStream(path)
 );

 doc.fontSize(24)
 .text("SecureScan Report");

 doc.moveDown();

 findings.forEach(item=>{

  doc.fontSize(16)
  .text(item.title);

  doc.fontSize(12)
  .text(item.description);

  doc.moveDown();
 });

 doc.end();

 return path;
}
