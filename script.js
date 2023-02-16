// Form-1
const Businessname = document.getElementById("bname");
const sheetDate = document.getElementById("sheet-date");
const cash = document.getElementById("cash");
const accounts = document.getElementById("accounts");
const inventory = document.getElementById("inventory");
const expenses = document.getElementById("expenses");
const notes = document.getElementById("notes");

// PDF-form
const cashPdf = document.getElementById("cash-data");
const accPdf = document.getElementById("acc-data");
const InvenPdf = document.getElementById("Inven-data");
const prePaidPdf = document.getElementById("prepaid-data");
const notesPdf = document.getElementById("notes-data");
const otherPdf = document.getElementById("other-data");
const totalCash = document.getElementById("total-cash");
const businessPdf = document.getElementById("business-data");

const mmPdf = document.getElementById('mm-data');
const ddPdf = document.getElementById('dd-data');
const yyyyPdf = document.getElementById('yyyy-data');

const datePdf = [mmPdf, ddPdf, yyyyPdf]

const arr = [cash, accounts, inventory, expenses, notes];

const arrPDF = [
  cashPdf,
  accPdf,
  InvenPdf,
  prePaidPdf,
  notesPdf,
  otherPdf,
  totalCash,
];

arr.forEach((item, index) => {
  item.addEventListener("change", () => {
    arrPDF[index].innerText = `$${item.value}`;
  });
});

sheetDate.addEventListener("change", () => {
    const date = new Date(sheetDate.value);
    const mm = date.getMonth()+1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    const arrDate = [mm, dd, yyyy];

    datePdf.forEach((item, index)=>{
        console.log(item.innerText)
        item.innerText = arrDate[index];
    })
});

Businessname.addEventListener("change", () => {
  businessPdf.innerText = `${Businessname.value}`;
});


