export function nFormatter(num, digits = 0, returnString = false) {
  const si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;

  if (num || num === 0) {
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }

    let value = num / si[i].value;

    const decimalIndex = value.toString().indexOf(".");

    if (decimalIndex > -1 && digits) {
      value = value.toString().slice(0, decimalIndex + digits + 1);
    } else {
      value = value.toFixed(0);
    }

    if(returnString) return value.replace(rx, "$1") + si[i].symbol;
    
    return {
      value: value.replace(rx, "$1"),
      symbol: si[i].symbol,
    };
  } else {
    return num;
  }
}
