// 下载模板
function outputXlsxFile(XLSX, data, wscols, xlsxName) {
  var sheetNames = [];
  var sheetsList = {};
  for (var key in data) {
    sheetNames.push(key);
    var temp = DataExcel(data[key]);
    sheetsList[key] = XLSX.utils.aoa_to_sheet(temp);
    sheetsList[key]['!cols'] = wscols;
  }
  const wb = XLSX.utils.book_new();
  wb['SheetNames'] = sheetNames;
  wb['Sheets'] = sheetsList;
  XLSX.writeFile(wb, xlsxName + ".xlsx");
  //处理数据的函数
  function DataExcel(data) {
    var total = [];
    var temp = data.xlsxHeader;
    // var temp = [];
    total.push(temp);
    data.data.forEach(item => {
      var arr = [];
      data.xlsxAttribute.map((v) => {
        arr.push(item[v])
      })
      total.push(arr);
    })
    return total;
  }
}

function outputXlsxInArray(opt) {
  const wopts = { bookType: 'xlsx', bookSST: true, type: 'binary' }
  let workbook = this.utils.book_new()
  const sheets = opt['SheetNames']
  const sheetsConfig = []

  workbook['SheetNames'] = sheets
  sheets.map((v, i) => {
    const sheet = opt['Sheets'][i]
    const { merger, headers, config, ahead } = sheet
    sheet.data.unshift(headers)
    if (ahead && (ahead.constructor === Array)) sheet.data = [...ahead, ...sheet.data]
    if (merger) sheet.data.unshift(merger)
    const sheetConfig = this.utils.aoa_to_sheet(sheet.data)
    if (config) {
      const keys = Object.keys(config)
      keys.map(v => {
        const a = sheetConfig[v]
        if (!a) sheetConfig[v] = config[v]
        else sheetConfig[v] = Object.assign(a, config[v])
      })
    }
    sheetsConfig[v] = sheetConfig
  })
  workbook['Sheets'] = sheetsConfig

  const xlsxName = `${opt.xslx || '报表'}.xlsx`
  var wbout = XLSX.write(workbook, wopts)
  var blob = new Blob([s2ab(wbout)], {type: ''})

  function saveAs (obj, fileName) {
    var tmpa = document.createElement('a')
    tmpa.download = fileName || '下载.xlsx'
    tmpa.href = URL.createObjectURL(obj)
    tmpa.click()
    setTimeout(function () {
      URL.revokeObjectURL(obj)
    }, 100)
  }

  function s2ab (s) {
    var buf
    if (typeof ArrayBuffer !== 'undefined') {
      buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF
      return buf
    } else {
      buf = new Array(s.length)
      for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF
      return buf
    }
  }

  saveAs(blob, xlsxName)
}

export {
  outputXlsxFile,
  outputXlsxInArray
}
