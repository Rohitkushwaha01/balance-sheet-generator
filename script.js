// page-1
const page1 = document.getElementById("page-1");
const sheetDate = document.getElementById("sheet-date");
const cash = document.getElementById("cash");
const accounts = document.getElementById("accounts");
const inventory = document.getElementById("inventory");
const expenses = document.getElementById("expenses");
const notes = document.getElementById("notes");
const bname = document.getElementById("bname");
const other = document.getElementById("other-assets");
const save = document.getElementById("save");

// Page-2
const page2 = document.getElementById("page-2");
const long = document.getElementById("long");
const land = document.getElementById("land");
const building = document.getElementById("building");
const accBuild = document.getElementById("acc-build");
const machinery = document.getElementById("machinery");
const accMarchinery = document.getElementById("acc-marchinery");
const ff = document.getElementById("f-f");
const accf = document.getElementById("acc-f");

page2.classList.add("hidden");

// PDF-form
const previewForm = document.getElementById("preview-form");

const arr = [
  bname,
  sheetDate,
  cash,
  accounts,
  inventory,
  expenses,
  notes,
  other,
  long,
  land,
  building,
  accBuild,
  machinery,
  accMarchinery,
  ff,
  accf,
];

// creating an object of jsPDF library
let doc = new jsPDF();
let body1 = [
  ["Cash: ", "$0.00"],
  ["Accounts Receivable: ", "$0.00"],
  ["Inventory: ", "$0.00"],
  ["Prepaid Expenses: ", "$0.00"],
  [
    "Notes Receivable:                                                        ",
    "$0.00",
  ],
  ["Other Current Assets: ", "$0.00"],
  ["Total Current Assets: ", "$0.00"],
];

let body2 = [
  ["Long-Term Investents: ", "$0.00"],
  ["Land: ", "$0.00"],
  ["Building: ", "$0.00"],
  ["Accumulated Building Depreciation: ", "$0.00"],
  ["Machinery and Equipment: ", "$0.00"],
  ["Accumulated Machinery and Equipment Depreciation: ", "$0.00"],
  ["Furniture and Fixtures: ", "$0.00"],
  ["Accumulated Furniture and Fixtures Depreciation: ", "$0.00"],
  ["Other Fixed Assets: ", "$0.00"],
  ["Net Fixed Assets: ", "$0.00"],
];

// generate auto table with body
let generateTable = (body, yaxis) => {
  doc.setLineWidth(3);
  doc.autoTable({
    body: body,
    styles: { fontSize: 16 },
    startY: yaxis,
    theme: "striped",
  });
};

// Getting the page widht and height
let pageHeight = doc.internal.pageSize.getHeight();
let pageWidth = doc.internal.pageSize.getWidth();

// Adding element/text in pdf page
doc.setFontSize(26);
doc.text("__________________", pageWidth / 2, pageHeight - 270, {
  align: "center",
});
doc.setFontSize(25);
doc.text("Balance sheet", pageWidth / 2, pageHeight - 250, { align: "center" });
doc.setFontSize(15);
doc.text("mm / dd / yyyy", pageWidth / 2, pageHeight - 241, {
  align: "center",
});
doc.setFontSize(20);
doc.text("assets", pageWidth / 2, pageHeight - 225, { align: "center" });
doc.setFontSize(18);
doc.text("CURRENT ASSETS", 45, pageHeight - 210, { align: "center" });
doc.text("_________________", 45, pageHeight - 209, { align: "center" });
doc.text("FIXED ASSETS", 38, pageHeight - 125, { align: "center" });
doc.text("_____________", 38, pageHeight - 123, { align: "center" });

// Initial call (Display user with this data)
generateTable(body1, 95); // this should be called before doc.output else it will not generate pdf.
generateTable(body2, 180); // this should be called before doc.output else it will not generate pdf.

let pdfData = doc.output();

const blob = (data) => {
  let pdfBlob = new Blob([data], {
    type: "application/pdf",
  });

  let objectURL = URL.createObjectURL(pdfBlob);
  previewForm.innerHTML = "";
  previewForm.innerHTML =
    "<embed src='" +
    objectURL +
    "' type='application/pdf' width='100%' height='300px'>";
};

blob(pdfData);

// on changing any data of the input this will be called.
const onChangeData = () => {
  let doc1 = new jsPDF();
  const date = new Date(sheetDate.value);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yyyy = date.getFullYear();
  let generateTable1 = (body) => {
    doc1.setLineWidth(3);
    doc1.autoTable({
      body: body,
      styles: { fontSize: 16 },
      startY: 90,
      theme: "striped",
    });
  };

  let generateTable2 = (body) => {
    doc1.setLineWidth(3);
    doc1.autoTable({
      body: body,
      styles: { fontSize: 16 },
      startY: 180,
      theme: "striped",
    });
  };

  doc1.text("__________________", pageWidth / 2, pageHeight - 270, {
    align: "center",
  });
  doc1.setFontSize(30);
  doc1.text("Balance sheet", pageWidth / 2, pageHeight - 250, {
    align: "center",
  });
  doc1.setFontSize(20);
  doc1.text("assets", pageWidth / 2, pageHeight - 225, { align: "center" });
  doc1.setFontSize(18);
  doc1.text("CURRENT ASSETS", 45, pageHeight - 210, { align: "center" });
  doc1.text("_________________", 45, pageHeight - 209, { align: "center" });
  doc1.text("FIXED ASSETS", 38, pageHeight - 125, { align: "center" });
  doc1.text("_____________", 38, pageHeight - 123, { align: "center" });

  if (bname.value != "") {
    doc1.setFontSize(35);
    doc1.text(`${bname.value}`, pageWidth / 2, pageHeight - 272, {
      align: "center",
    });
  }

  if (sheetDate.value != "") {
    doc1.setFontSize(20);
    doc1.text(`${mm}/${dd}/${yyyy}`, pageWidth / 2, pageHeight - 235, {
      align: "center",
    });
  } else {
    doc1.setFontSize(25);
    doc1.text(`Date`, pageWidth / 2, pageHeight - 235, {
      align: "center",
    });
  }

  if (cash.value !== "") {
    body1[0][1] = `$${(+cash.value).toFixed(2)}`;
    generateTable1(body1);
  } else {
    generateTable(body1);
  }

  if (accounts.value !== "") {
    body1[1][1] = `$${(+accounts.value).toFixed(2)}`;
    generateTable1(body1);
  } else {
    generateTable1(body1);
  }

  if (inventory.value !== "") {
    body1[2][1] = `$${(+inventory.value).toFixed(2)}`;
    generateTable1(body1);
  } else {
    generateTable1(body1);
  }

  if (expenses.value !== "") {
    body1[3][1] = `$${(+expenses.value).toFixed(2)}`;
    generateTable1(body1);
  } else {
    generateTable1(body1);
  }

  if (notes.value !== "") {
    body1[4][1] = `$${(+notes.value).toFixed(2)}`;
    generateTable1(body1);
  } else {
    generateTable1(body1);
  }

  if (other.value !== "") {
    body1[5][1] = `$${(+other.value).toFixed(2)}`;
    generateTable1(body1);
  } else {
    generateTable1(body1);
  }

  let totalAssets =
    +cash.value +
    +accounts.value +
    +inventory.value +
    +expenses.value +
    +notes.value +
    +other.value;

  body1[6][1] = `$${totalAssets.toFixed(2)}`;
  generateTable1(body1);
  generateTable2(body2);

  if (long.value !== "") {
    body2[0][1] = `$${(+long.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (land.value !== "") {
    body2[1][1] = `$${(+land.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (building.value !== "") {
    body2[2][1] = `$${(+building.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (accBuild.value !== "") {
    body2[3][1] = `$${(+accBuild.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (machinery.value !== "") {
    body2[4][1] = `$${(+machinery.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (accMarchinery.value !== "") {
    body2[5][1] = `$${(+accMarchinery.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (ff.value !== "") {
    body2[6][1] = `$${(+ff.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  if (accf.value !== "") {
    body2[7][1] = `$${(+accf.value).toFixed(2)}`;
    generateTable2(body2);
  } else {
    generateTable2(body2);
  }

  let netFixedAssets =
    +long.value +
    +land.value +
    +building.value -
    +accBuild.value +
    +machinery.value -
    +accMarchinery.value +
    +ff.value -
    +accf.value;

  body2[9][1] = `$${netFixedAssets.toFixed(2)}`;
  generateTable1(body1);
  generateTable2(body2);

  let pdfData = doc1.output();
  blob(pdfData);
};

// handling events
arr.forEach((item) => {
  item.addEventListener("change", onChangeData);
});

save.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  localStorage.setItem("cash", cash.value);
  localStorage.setItem("accounts", accounts.value);
  localStorage.setItem("inventory", inventory.value);
  localStorage.setItem("expenses", expenses.value);
  localStorage.setItem("notes", notes.value);
  localStorage.setItem("bname", bname.value);
});
