"use strict";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, -900, -230, 700, 50, 90, -500],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
};

const account5 = {
  owner: "Nikhil ranjan kumar",
  movements: [900, 815, 700, 105, -110, 60, -395, 1058, -301, -115, 400],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
const account6 = {
  owner: "Anurag Mohan",
  movements: [900, 815, 700, 105, -110, 60, -395, 1058, -301, -115, 400],
  interestRate: 1,
  pin: 1120,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
const account7 = {
  owner: "Saurabh Sagar Pandey",
  movements: [900, 815, 700, 105, -110, 60, -395, 1058, -301, -115, 400],
  interestRate: 1,
  pin: 1234,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};
const account8 = {
  owner: "Royal Khan",
  movements: [9000, 815, 70, 105, -110, 60, -395, 108, -301, -115, 4000],
  interestRate: 1,
  pin: 786,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
];

// // console.log(accounts);

///////////////////////////////////strt coding //////////////////////////////////////////////////////////////////////////////////////////////////////////////////'//////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//selecting dom // . //
let mainContainer = document.querySelector(".app");
let containerMovents = document.querySelector(".movements");
let labelBalance = document.querySelector(".balance__value");
let labelTotalDeposite = document.querySelector(".summary__value--in");
let labelTotalWithdrawal = document.querySelector(".summary__value--out");
let labelTotalIntrest = document.querySelector(".summary__value--interest");
let selectBtn = document.querySelector(".login__btn");
let userLoginInput = document.querySelector(".login__input--user");
let pinLoginInput = document.querySelector(".login__input--pin");
let uiMessage = document.querySelector(".welcome");
let Transferbtn = document.querySelector(".form__btn--transfer");
let transferTo = document.querySelector(".form__input--to");
let transferAmt = document.querySelector(".form__input--amount");
let loanBtn = document.querySelector(".form__btn--loan");
let loanInputAmount = document.querySelector(".form__input--loan-amount");
let setTimer = document.querySelector(".timer");
let btnClose = document.querySelector(".form__btn--close");
let delUser = document.querySelector(".form__input--user");
let delPin = document.querySelector(".form__input--pin");
let btnSort = document.querySelector(".btn--sort");
let labelDates = document.querySelector("movements__date");
// ********************************************************************************/
//  current account function //
let displayUi = function (act) {
  displayMovents(act.movements);
  diplayCurrentBalance(act);
  displayDeposite(act.movements);
  displayWithdrawal(act.movements);
  displayIntrest(act.movements);
};

// ***********************************/

//    display movements   ///

function displayMovents(movents, sort = false) {
  containerMovents.innerHTML = "";

  const movs =
    sort > 0
      ? movents.slice().sort(function (a, b) {
          return a - b;
        })
      : movents;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
    <div class="movements__date">1/30/2019</div>
          <div class="movements__value"> ${mov}   €</div>
        </div>
        `;
    containerMovents.insertAdjacentHTML("beforeend", html);
  });
}
// *******************************************************************/

//     display total balance  //

const diplayCurrentBalance = function (acc) {
  acc.updateBalance = acc.movements.reduce(function (accc, cur) {
    return (accc = accc + cur);
  }, 0);
  labelBalance.textContent = `${acc.updateBalance} €`;
};
// ********************************************************************/

//     display deposite   ///

const displayDeposite = function (move) {
  let comeIn = move
    .filter(function (movement) {
      return movement > 0;
    })
    .reduce(function (acc, cur) {
      return (acc = acc + cur);
    }, 0);
  labelTotalDeposite.textContent = `${comeIn} €`;
};

// **********************************************************************/
// display withdrwal  //

const displayWithdrawal = function (move) {
  let goesOut = move
    .filter(function (movement) {
      return movement < 0;
    })
    .reduce(function (acc, cur) {
      return (acc = acc + cur);
    }, 0);
  labelTotalWithdrawal.textContent = `${Math.abs(goesOut)} €`;
};
//************************************************************ */

// display intrest  //

const displayIntrest = function (move) {
  const interestRate = 1.2;
  const addIntrest = move
    .filter(function (movement) {
      return movement > 0;
    })
    .map(function (mult) {
      return (mult * interestRate) / 100;
    })
    .filter(function (filtering) {
      return filtering >= 1;
    })
    .reduce(function (acc, cur) {
      return (acc = acc + cur);
    });
  labelTotalIntrest.textContent = `${addIntrest} €`;
};
// ********************************************************************/

//    create user name //

function createUserName(accs) {
  accs.forEach(function (accs) {
    accs.userName = accs.owner
      .toLowerCase()
      .split(" ")
      .map(function (userid) {
        return userid[0];
      })
      .join("");
  });
}

createUserName(accounts);
// ****************************************************************************

// user login //
let currentAccount;
selectBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return acc.userName === userLoginInput.value;
  });
  if (currentAccount?.pin === Number(pinLoginInput.value)) {
    //   display  //
    uiMessage.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    mainContainer.style.opacity = 100;
    displayUi(currentAccount);
  } else {
    alert("wrong username and password");
  }
  userLoginInput.value = pinLoginInput.value = "";
});
/*********************************************************************** */

// create transfer method .........****/

Transferbtn.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(transferAmt.value);
  const receiverAcc = accounts.find(function (rev) {
    return transferTo.value === rev.userName;
  });
  transferTo.value = transferAmt.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.updateBalance > amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    console.log(currentAccount.movements);
    receiverAcc.movements.push(amount);
    displayUi(currentAccount);
  } else {
    alert = `check for correct username,amount and try once`;
  }
});

//********************************************************* */

// request loan //

loanBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmt = Number(loanInputAmount.value);
  if (loanAmt > 0 && currentAccount.updateBalance > loanAmt) {
    currentAccount.movements.push(loanAmt);
    console.log(currentAccount.movements);
    displayUi(currentAccount);
  }
  loanInputAmount.value = "";
});

// del acccount //
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    delUser.value === currentAccount.userName &&
    Number(delPin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (acc) {
      return acc.userName === currentAccount.userName;
    });
    accounts.splice(index, 1);
    mainContainer.style.opacity = 0;
    uiMessage.textContent = `Log in to get Started`;
  }
});

//************************************************ */

// sorting movements //
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovents(currentAccount.movements, !sorted);
  sorted = !sorted;
  // displayUi(currentAccount);
});
/************************************************* */

/************************************************** */
//display date of movements /********************** */

const displayDate = function (acc) {
  labelDates.textContent = new Date(acc.movementsDates);
};

 displayDate(accounts);
