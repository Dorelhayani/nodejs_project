
let raw_data=[];
let srchTerm="";

function FilterData(el){
    console.log("FilterData::",el);
    if(srchTerm=="")
        return true;
    let reg=new RegExp(srchTerm,"i");
    if(reg.test(el.name)){
        return true;
    }
    return false;
}
function CreateTble(){
    srchTerm=document.getElementById("filterField").value;
    let data=raw_data.filter(FilterData);
    let str="";
    for(let line of data){
        str+="<tr>";
        str+="<td>"+line.name+"</td>";
        str+=`<td>${line.phone}</td>`;
        str+=`<td>${line.pobox}</td>`;
        str+="</tr>";
    }
    document.getElementById("mainTable").innerHTML=str;
}

async function fetchText() {
    let response = await fetch('/List');
    // console.log("response=",response);
    let data = await response.json();
    console.log("data=",data);
    raw_data = data;
    CreateTble();
}
CreateTble();