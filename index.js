// starter code containing the finance data
var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];
// create a variable to store the element of the textarea to output the profit datasheet. Then display the datasheet in the webpage.
let profitDataEl = document.getElementById("profitData");
profitDataEl.textContent = finances.join("\r\n")


console.log("Financial Analysis");
console.log("----------------------------");

//create a variable to store the total number of the months in the financial data
// display the total number of the months
let monthNum = finances.length;
console.log("Total Months: " + monthNum );


// create a variable to store the net total amount of Profit/Losses over the entire period
let sumProfit = 0;
function calSum() {
    for(let i=0; i < monthNum; i++) {
    sumProfit += finances[i][1];
    }
}
calSum();
console.log("Total profit: $" + sumProfit);


// create a 2D array to store the changes in profits from month to month
let changes = Array.from(Array(monthNum), ()=> new Array(2)); 
changes[0] = ['Jan-2010', 867884] // initialize the first element of change as same as the profit in the first month

// claculate the changes in profits from month to month
for(let i=1; i<monthNum; i++) {
    changes[i][0] = finances[i][0];
    changes[i][1] = finances[i][1] -finances[i-1][1];
}

// create total and average of the changes in Profit/Losses over the entire period
let totalChanges = 0;
let averageChanges = 0;

// console.log(changes);  display the changes array for a quick check

// calculate the total changes in Profit/Losses over the entire period
for (let i=0; i<monthNum; i++) {
    totalChanges += changes[i][1];
}
averageChanges = totalChanges/monthNum;
console.log("Average  Change: $" + averageChanges.toFixed(2)); // display the average change and set the number up to 2 decimals using the toFixed() method

// create two variables to store the greatest increase and decrease in profits over the entire period
let maxIncrease = ["",0];
let maxDecrease = ["",0];

for(let i=0; i<monthNum; i++) {
    if(maxIncrease[1]<changes[i][1]) {
        maxIncrease = changes[i];
    }
    if(maxDecrease[1]>changes[i][1]) {
        maxDecrease = changes[i];
    }
}
console.log("Greatest Increase in Profits: " + maxIncrease[0] + " ($" + maxIncrease[1] + ")");

console.log("Decrease in Profits: " + maxDecrease[0] + " ($" + maxDecrease[1] +")");



// console.log(monthNum);
// console.log(sumProfit)
// console.log(averageChanges);

// Create a function to open report in browser when the button was clicked
let reportEl = document.getElementById("report");

function openReport() {
    
    reportEl.innerText = "Financial Analysis\r\n";
    reportEl.innerText += "----------------------------\r\n";
    reportEl.innerText += "Total Months: " + monthNum+ "\r\n";
    reportEl.innerText += "Total profit: $" + sumProfit +"\r\n";
    reportEl.innerText += "Average  Change: $" + averageChanges.toFixed(2) + "\r\n";
    reportEl.innerText += "Greatest Increase in Profits: " + maxIncrease[0] + " ($" + maxIncrease[1] + ")" +"\r\n";
    reportEl.innerText += "Decrease in Profits: " + maxDecrease[0] + " ($" + maxDecrease[1] +")";
}
