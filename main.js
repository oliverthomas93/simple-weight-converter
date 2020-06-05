let calcbtn = document.getElementById('calc'); 

calcbtn.onclick = function() {
     let input = document.getElementById('enter').value;
     if (document.getElementById('kgs1').checked && document.getElementById('kgs2').checked) {
        document.getElementById('result-output').value = input;
     } else if (document.getElementById('kgs1').checked && document.getElementById('lbs2').checked) {
        document.getElementById('result-output').value = input * 2.205;
     } else if (document.getElementById('kgs1').checked && document.getElementById('stone2').checked) {
        document.getElementById('result-output').value = input / 6.35;
     } else if (document.getElementById('lbs1').checked && document.getElementById('kgs2').checked) {
        document.getElementById('result-output').value = input / 2.205;
     } else if (document.getElementById('lbs1').checked && document.getElementById('lbs2').checked) {
        document.getElementById('result-output').value = input;
     } else if (document.getElementById('lbs1').checked && document.getElementById('stone2').checked) {
        document.getElementById('result-output').value = input / 14;
     } else if (document.getElementById('stone1').checked && document.getElementById('kgs2').checked) {
        document.getElementById('result-output').value = input * 6.35;
     } else if (document.getElementById('stone1').checked && document.getElementById('lbs2').checked) {
        document.getElementById('result-output').value = input * 14;
     } else if (document.getElementById('stone1').checked && document.getElementById('stone2').checked) {
        document.getElementById('result-output').value = input;
     }
}