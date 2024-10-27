/*!
*     Author: Meraz Alvee
*     Contact: hi@plpfiles.com
*     Website: https://www.plpfiles.com
*     Version: 1.3
*     License: MIT License (https://opensource.org/licenses/MIT)
*     GitHub Repository: https://github.com/merazalveego/ChatGPT/js/copyText.js
*/

function copyText(elementId) {var text = document.getElementById(elementId).innerText;navigator.clipboard.writeText(text).then(function () {alert("Text copied to clipboard!");}).catch(function (error) {alert("Failed to copy text: " + error);});}
