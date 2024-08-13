
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('password-field').value;
    console.log(name);
    if(!name){
        document.getElementById('msg1').textContent = "please Enter valid info";
        document.getElementById('msg1').style.color = "red";
        document.getElementById('msg1').style.textTransform = "capitalize";
        document.getElementById('msg1').style.backgroundColor = "#fff";
    }
    else{
        document.getElementById('msg1').textContent = "";
    }
});

    document.getElementById('password-field').addEventListener('input', passValid);


function passValid(){
    const name = document.getElementById('password-field').value;
    if(!(!name)){
        document.getElementById('msg1').textContent = "";
    }
}
