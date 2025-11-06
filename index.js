function result() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById(" placeholder").value;

    var answer;

    if (operator === "บวก") {
        answer = num1 + num2;
    } else if (operator === "ลบ") {
        answer = num1 - num2;
    } else if (operator === "คูณ") {
        answer = num1 * num2;
    } else if (operator === "หาร") {
        if (num2 !== 0) {
            answer = num1 / num2;
        } else {
            answer = "ไม่สามารถหารด้วย 0 ได้";
        }
    } else {
        answer = "กรุณาเลือกเครื่องหมาย";
    }

    document.getElementById("Answer").innerText = "ANSWER: " + answer;
}