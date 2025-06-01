function readForm1(){

    var name_form1 = document.getElementById("name1").value;
    var adres_form1 = document.getElementById("adres1").value;
    var phone_form1 = document.getElementById("phone1").value;
    var pay_form1 = document.getElementById("pay").value;

    if (name_form1 == "" || adres_form1 == "" || phone_form1 == "" || pay_form1 == ""){

        if(name_form1==""){
            document.getElementById("check1_false").innerHTML = "incorrect";
            document.getElementById("check1_true").innerHTML = "";
        }
        else{
            document.getElementById("check1_false").innerHTML = "";
            document.getElementById("check1_true").innerHTML = "correct";
        }

        if(adres_form1==""){
            document.getElementById("check2_false").innerHTML = "incorrect";
            document.getElementById("check2_true").innerHTML = "";
        }
        else{
            document.getElementById("check2_false").innerHTML = "";
            document.getElementById("check2_true").innerHTML = "correct";
        }

        if(phone_form1==""){ 
            document.getElementById("check3_false").innerHTML = "incorrect";
            document.getElementById("check3_true").innerHTML = "";
        }
        else{
            document.getElementById("check3_false").innerHTML = "";
            document.getElementById("check3_true").innerHTML = "correct";
        }

        if(pay_form1==""){
            document.getElementById("check4_false").innerHTML = "incorrect";
            document.getElementById("check4_true").innerHTML = "";
        }
        else{
            document.getElementById("check4_false").innerHTML = "";
            document.getElementById("check4_true").innerHTML = "correct";
        }
        return false;
    }
    else{
        alert(name_form1 + ", " + adres_form1 + ", " + phone_form1 + ", " + pay_form1 );
        document.getElementById("check1_true").innerHTML = "correct";
        document.getElementById("check2_true").innerHTML = "correct";
        document.getElementById("check3_true").innerHTML = "correct";
        document.getElementById("check4_true").innerHTML = "correct";
        document.getElementById("check1_false").innerHTML = "";
        document.getElementById("check2_false").innerHTML = "";
        document.getElementById("check3_false").innerHTML = "";
        document.getElementById("check4_false").innerHTML = "";
        
    }
}
function readForm2(){
    var name_form2 = document.getElementById("name2").value;
    var surname_form2 = document.getElementById("surname").value;
    var phone_form2 = document.getElementById("phone2").value;
    var city_form2 = document.getElementById("city").value;
    var date_form2 = document.getElementById("date").value;

    if(name_form2 == "" || surname_form2 =="" || phone_form2 =="" || city_form2 ==""|| date_form2 ==""){
        if(name_form2 == ""){
            document.getElementById("check1_false2").innerHTML = "incorrect";
            document.getElementById("check1_true2").innerHTML = "";
        }
        else{
            document.getElementById("check1_false2").innerHTML = "";
            document.getElementById("check1_true2").innerHTML = "correct";
        }

        if(surname_form2 == ""){
            document.getElementById("check2_false2").innerHTML = "incorrect";
            document.getElementById("check2_true2").innerHTML = "";
        }
        else{
            document.getElementById("check2_false2").innerHTML = "";
            document.getElementById("check2_true2").innerHTML = "correct";
        }

        if(phone_form2 == ""){
            document.getElementById("check3_false2").innerHTML = "incorrect";
            document.getElementById("check3_true2").innerHTML = "";
        }
        else{
            document.getElementById("check3_false2").innerHTML = "";
            document.getElementById("check3_true2").innerHTML = "correct";
        }

        if(city_form2 == ""){
            document.getElementById("check4_false2").innerHTML = "incorrect";
            document.getElementById("check4_true2").innerHTML = "";
        }
        else{
            document.getElementById("check4_false2").innerHTML = "";
            document.getElementById("check4_true2").innerHTML = "correct";
        }

        if(date_form2 == ""){
            document.getElementById("check5_false2").innerHTML = "incorrect";
            document.getElementById("check5_true2").innerHTML = "";
        }
        else{
            document.getElementById("check5_false2").innerHTML = "";
            document.getElementById("check5_true2").innerHTML = "correct";
        }

        return false;

    }
    else{
        alert(name_form2 + ", " + surname_form2 + ", " + phone_form2 + ", " + city_form2 + ", " + date_form2);

        document.getElementById("check1_true2").innerHTML ="correct";
        document.getElementById("check2_true2").innerHTML ="correct";
        document.getElementById("check3_true2").innerHTML ="correct";
        document.getElementById("check4_true2").innerHTML ="correct";
        document.getElementById("check5_true2").innerHTML ="correct";

        document.getElementById("check1_false2").innerHTML= "";
        document.getElementById("check2_false2").innerHTML= "";
        document.getElementById("check3_false2").innerHTML= "";
        document.getElementById("check4_false2").innerHTML= "";
        document.getElementById("check5_false2").innerHTML= "";
    }
}

document.getElementById('btn_form1').addEventListener('click', readForm1);
document.getElementById('btn_form2').addEventListener('click', readForm2);