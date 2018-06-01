var xl = require('excel4node')
var csv = require('csv')
var fs = require('fs')
var XLSX = require('xlsx')

// Create a new instance of a Workbook class
var wb = new xl.Workbook();
 
// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');
var ws2 = wb.addWorksheet('Sheet 2');
 
// Create a reusable style
var style = wb.createStyle({
    font: {
        color: '#FF0800',
        size: 12
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -'
});
 
// Set value of cell A1 to 100 as a number type styled with paramaters of style
ws.cell(1,1).number(100).style(style);
 
// Set value of cell B1 to 300 as a number type styled with paramaters of style
ws.cell(1,2).number(200).style(style);
 
// Set value of cell C1 to a formula styled with paramaters of style
ws.cell(1,3).formula('A1 + B1').style(style);
 
// Set value of cell A2 to 'string' styled with paramaters of style
ws.cell(2,1).string('string').style(style);
 
// Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
ws.cell(3,1).bool(true).style(style).style({font: {size: 14}});
 
// wb.writeToBuffer().then(function(buffer){
//     console.log('buffer')
//     console.log(buffer)
//     console.log(buffer.toJSON().data)
//     // Do something with buffer
//     csv.stringify(buffer.toJSON().data, function(data){
//         console.log('data')
//         console.log(data)
//         fs.writeFileSync('here.csv', data);
//     })
// })

wb.writeToBuffer().then(function(buffer){
    var workbook = XLSX.read(buffer, {type:"buffer"})
    XLSX.writeFile(workbook, 'out.csv');
})

//XLSX.writeFile(wb, 'out.csv')

// wb.writeFile().then(function(buffer){
//     console.log(buffer)
//     var output_file_name = "out.csv";
//     var stream = XLSX.stream.to_csv(ws);
//     stream.pipe(fs.createWriteStream(output_file_name));
// })