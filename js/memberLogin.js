const form = document.getElementById('form');
form.onsubmit = (e) => {
    e.preventDefault();
}

function validateData(){
    
    let member_id = document.getElementById("memberId").value;
    let pass = document.getElementById('password-field').value;

    if(!member_id){
        document.getElementById('msg1').textContent = "Please Enter MemberID";
        document.getElementById('msg1').style.color = "red";
    }
    else{
        document.getElementById('msg1').textContent = "";
    }

    if(!pass){
        document.getElementById('msg2').textContent = "Please Enter Valid password"
        document.getElementById('msg2').style.color = "red";
    }
    else{
        document.getElementById('msg2').textContent = "";
    }
};

$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
    input.attr("type", "text");
    } else {
    input.attr("type", "password");
    }
});




