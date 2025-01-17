const dates = ["2024-1-10","2025-2-20","2026-3-30"]
const res = dates.map(formateDate)
console.log(res);

function formateDate(element){
    const splitArr = element.split("-")
    return`${splitArr[1]}/${splitArr[2]}/${splitArr[0]}`
}

//OUTPUT:  [ '1/10/2024', '2/20/2025', '3/30/2026' ]