
async function add_new_line() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let pobox = document.getElementById("pobox").value;

    let response  = await fetch('/Add', {
        method: 'POST', // שיטת שליחה
        headers: {'Content-Type': 'application/json'}, // שדה שאומר באיזה פורמט המידע יצא
    body: JSON.stringify({name: name, phone: phone, pobox: pobox}) // המרת הנתונים מג'ייסון למחרוזת
    });
    let data = await response.json();
    console.log(data);
}


