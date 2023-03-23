// Created by: Graydon
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates total income and tax.
 */
const TAXRATE= 0.2005
function calculate () {
  // input
  let hoursWorked = parseFloat(document.getElementById('hours-worked').value);
  let hourlyRate = parseFloat(document.getElementById('hourly-rate').value);

  // process
  let yourTotalPay =  hoursWorked * hourlyRate
  let taxes =  yourTotalPay*TAXRATE
  let netIncome = yourTotalPay - taxes
  
  // output
  document.getElementById('your-pay').innerHTML = 'Your net pay is: $' + netIncome.toFixed(2)
  document.getElementById('taxes').innerHTML = 'The government will take: $' + taxes.toFixed(2)

}
