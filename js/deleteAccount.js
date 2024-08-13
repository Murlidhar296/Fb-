let submitAction = document.getElementById('submit');
let i = 0;


// let hide = document.getElementById('hide');
// let show = document.getElementById('show');


// show.addEventListener('click', () => {
//     hide.classList.toggle('active');
// });

submitAction.addEventListener('click', (e) => {
    e.preventDefault();
    
   
    let member_id = document.getElementById('member_id').value;
    let reason = document.getElementById('reason');
    let member = document.getElementsByName('type');

    let isValid = false;
    for(var i = 0; i < member.length; i++){
        if(member[i].checked){
            isValid = true;
            break;
        }
    };

    if(isValid){
        document.getElementById('msg3').textContent = "";
    }else{
        document.getElementById('msg3').textContent = "please select anyone option";
        document.getElementById('msg3').style.color = "red";
    }
    
    if(!member_id){
        document.getElementById('msgs1').textContent = "Enter valid Member_ID";
        document.getElementById('msgs1').style.color = "red";
    }
    else{
        document.getElementById('msgs1').textContent = ""; 
    }

    if(!reason.value){
        document.getElementById('msgs2').innerText = "Select Any Option";
        document.getElementById('msgs2').style.color = "red";
    }
    else {
        document.getElementById('msgs2').textContent = "";
    }
});

    document.getElementById('member_id').addEventListener('input', checkValidate);
    document.getElementById('reason').addEventListener('input', selectOption);
    
    function radios(){
        let type = document.getElementsByName('type');

        if(type[0].checked == false){
            document.getElementById('msg3').textContent = "Select anyone option";
            document.getElementById('msg3').style.color = "red";
        }
        else if(type[1].checked == false){
            document.getElementById('msg3').textContent = "Select anyone option";
            document.getElementById('msg3').style.color = "red";
        }
      
        else{
            document.getElementById('msg3').textContent = "";
            document.getElementById('msg3').textContent = "";
        }
    }
   
        
    function selectOption(){
        let reason = document.getElementById('reason');
        if(!(!reason.value)){
            document.getElementById('msgs2').textContent = "";
        }
    };

    function checkValidate(){
        let member_id = document.getElementById('member_id').value;
        
        if(!(!member_id)){
            document.getElementById('msgs1').textContent = "";   
        };
    };
