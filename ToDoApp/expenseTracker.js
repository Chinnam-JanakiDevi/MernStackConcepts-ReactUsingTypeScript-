var addTask = document.getElementById("addTask");
var form = document.getElementById("form");
var submitButton = document.getElementById("submitButton");
var category = document.getElementById("category");
var todaydate = document.getElementById("date");
var amount = document.getElementById("amount");
var tablebody = document.getElementById("tablebody");
var totalPrice = document.getElementById("totalPrice");
if (totalPrice) {
    totalPrice.style.display = 'none'; // Hide the paragraph
}
addTask === null || addTask === void 0 ? void 0 : addTask.addEventListener("click", function () {
    if (form) {
        form.style.display = "flex";
    }
});
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var item = {
        todaydate: new Date(todaydate.value).toISOString().split('T')[0],
        category: category.value,
        amount: parseInt(amount.value)
    };
    data.addDetails(item);
    form.style.display = "none";
    form.reset();
});
var ExpenseDetails = /** @class */ (function () {
    function ExpenseDetails() {
        this.details = [];
    }
    ExpenseDetails.prototype.addDetails = function (detail) {
        this.details.push(detail);
        this.renderTable();
    };
    ExpenseDetails.prototype.deleteDetails = function (index) {
        this.details.splice(index, 1);
        this.renderTable();
    };
    ExpenseDetails.prototype.getTotal = function () {
        return this.details.reduce(function (acc, details) {
            return acc + details.amount;
        }, 0);
    };
    ExpenseDetails.prototype.renderTable = function () {
        tablebody.innerHTML = '';
        this.details.forEach(function (detail, index) {
            var row = document.createElement('tr');
            row.innerHTML = "\n                <td>".concat(detail.amount, "</td>\n                <td>").concat(detail.category, "</td>\n                <td>").concat(detail.todaydate, "</td>\n                <td>\n                    <button onclick=\"data.editExpense(").concat(index, ")\">Edit</button></td>\n                    <td><button onclick=\"data.deleteDetails(").concat(index, ")\" id=\"delete\">Delete</button>\n                </td>\n            ");
            tablebody.appendChild(row);
        });
        totalPrice.innerHTML = "&#x20b9;".concat(data.getTotal());
        if (totalPrice) {
            totalPrice.style.display = "inline-block"; // Display the paragraph
        }
    };
    // editExpense(index: number) {
    //     const detail = this.details[index];
    //     if (detail) {
    //         const newAmount = prompt("Enter new amount:", detail.amount.toString());
    //         const newCategory = prompt("Enter new category:", detail.category);
    //         const newDate = prompt("Enter new date (YYYY-MM-DD):", detail.todaydate);
    //         if (newAmount !== null && newCategory !== null && newDate !== null) {
    //             this.details[index] = {
    //                 amount: parseInt(newAmount),
    //                 category: newCategory,
    //                 todaydate: newDate
    //             };
    //             this.renderTable();
    //         }
    //     }
    // }
    ExpenseDetails.prototype.editExpense = function (index) {
        var _this = this;
        var detail = this.details[index];
        if (detail) {
            // Create a form element
            var editForm_1 = document.createElement('form');
            // Create input fields for amount, category, and date
            var amountInput_1 = document.createElement('input');
            amountInput_1.type = 'number';
            amountInput_1.value = detail.amount.toString();
            var categoryInput_1 = document.createElement('input');
            categoryInput_1.type = 'text';
            categoryInput_1.value = detail.category;
            var dateInput_1 = document.createElement('input');
            dateInput_1.type = 'date';
            dateInput_1.value = detail.todaydate;
            var submitButton_1 = document.createElement('button');
            submitButton_1.textContent = 'Save';
            editForm_1.addEventListener('submit', function (event) {
                event.preventDefault();
                _this.details[index] = {
                    amount: parseInt(amountInput_1.value),
                    category: categoryInput_1.value,
                    todaydate: dateInput_1.value
                };
                _this.renderTable();
                editForm_1.remove();
            });
            editForm_1.appendChild(amountInput_1);
            editForm_1.appendChild(categoryInput_1);
            editForm_1.appendChild(dateInput_1);
            editForm_1.appendChild(submitButton_1);
            document.body.appendChild(editForm_1);
        }
    };
    return ExpenseDetails;
}());
var data = new ExpenseDetails();
// const addTask = document.getElementById("addTask");
// const form = document.getElementById("form") as HTMLFormElement;
// const submitButton = document.getElementById("submitButton") as HTMLInputElement;
// const category = document.getElementById("category") as HTMLInputElement;
// const todaydate = document.getElementById("date") as HTMLInputElement;
// const amount = document.getElementById("amount") as HTMLInputElement;
// const tablebody = document.getElementById("tablebody") as HTMLElement;
// const deleteButton = document.getElementById("delete") as HTMLElement;
// interface Items {
//     todaydate: string;
//     category: string;
//     amount: number;
// }
// addTask?.addEventListener("click", () => {
//     if (form) {
//         form.style.display = "flex";
//     }
// });
// submitButton?.addEventListener("click", () => {
//     const item: Items = {
//         todaydate: new Date(todaydate.value).toISOString().split('T')[0],
//         category: category.value,
//         amount: parseInt(amount.value)
//     };
//     data.addDetails(item);
//     form.style.display = "none";
//     form.reset();
// });
// class ExpenseDetails {
//     details: Items[];
//     constructor() {
//         this.details = [];
//     }
//     addDetails(detail: Items) {
//         this.details.push(detail);
//         this.renderTable();
//     }
//     deleteDetails(index: number) {
//         this.details.splice(index, 1);
//         this.renderTable();
//     }
// //         deleteButton.addEventListener("click",(index: number) => {
// //     this.deleteDetails(index)
// // })
// renderTable() {
//     tablebody.innerHTML = ""
//     this.details.forEach((detail, index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//                 <td>${detail.amount}</td>
//                 <td>${detail.category}</td>
//                 <td>${(detail.todaydate)}</td>
//                 <td>
//                     <button onclick="editExpense(${index})">Edit</button></td>
//                     <td><button onclick="deleteDetails(${index})" id="delete">Delete</button>
//                 </td>
//             `;
//         tablebody.appendChild(row);
//     })
// }
// }
// const data = new ExpenseDetails();
