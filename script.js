// Form-1  
const sheetDate = document.getElementById('sheet-date');
const cash = document.getElementById('cash');
const accounts = document.getElementById('accounts');
const inventory = document.getElementById('inventory');
const expenses = document.getElementById('expenses');
const notes = document.getElementById('notes');

// PDF-form
const sheetDatePdf = document.getElementById('sheet-date-page-1')
const cashPdf = document.getElementById('cash-data');
const accPdf = document.getElementById('acc-data');
const InvenPdf = document.getElementById('Inven-data');
const prePaidPdf = document.getElementById('prepaid-data');
const notesPdf = document.getElementById('notes-data');
const totalCash = document.getElementById('total-cash');

const arr = [sheetDate, cash, accounts, inventory, expenses, notes]

const arrPDF = [sheetDatePdf, cashPdf, accPdf, InvenPdf, prePaidPdf, notesPdf, totalCash];

arr.forEach((item, index)=>{
    item.addEventListener('change', ()=>{
        arrPDF[index].innerText = `$${item.value}`
    })
})

sheetDate.addEventListener('change', ()=>{
    sheetDatePdf.value = `${sheetDate.value}`
})

