
const form = document.querySelector('.form');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (e) => {
   e.preventDefault();
   valiateData()
});


function valiateData(){
   const sponsor_id = document.getElementById('sponsor_id').value;
   const f_Name = document.getElementById('fName').value;
   const father_Name = document.getElementById('father_name').value;
   const l_name = document.getElementById('lName').value;
   const dob = document.getElementById('dob').value;
   const nominee_name = document.getElementById('nominee_name').value;
   // const nominee_age = document.getElementById('nominee_age').value;
   // const nominee_relation = document.getElementById('nominee_relation').value;
   const city_name = document.getElementById('city_name').value;
   const address = document.getElementById('address').value;
   const pin_code = document.getElementById('pin_code').value;
   const email = document.getElementById('email').value;
   const mobile = document.getElementById('mobile').value;
   const whats_app = document.getElementById('whats_app').value;
   const adhar_number = document.getElementById('adhar_number').value;
   const pan_number = document.getElementById('pan_number').value;
   const account_number = document.getElementById('account_number').value;
   const branch_name = document.getElementById('branch_name').value;
   const ifsc_code = document.getElementById('ifsc_code').value;
   const terms_condition = document.getElementById('agreed');

   if(!sponsor_id){
      document.getElementById('msg1').textContent = "please fill this feild";
      document.getElementById('msg1').style.color = 'red';
   }
   else{
      document.getElementById('msg1').textContent = "Success";
      document.getElementById('msg1').style.color = 'green';
   }

   if(!f_Name){
      document.getElementById('msg2').textContent = "Please Fill the feild";
      document.getElementById('msg2').style.color = "red"
   }else{
      document.getElementById('msg2').textContent = "";
      document.getElementById('msg2').style.color = "green";

   }

   if(!father_Name){
      document.getElementById('msg3').textContent = "Please Fill the feild";
      document.getElementById('msg3').style.color = "red"
   }else{
      document.getElementById('msg3').textContent = "";
      document.getElementById('msg3').style.color = "green";

   }

   if(!l_name){
      document.getElementById('msg4').textContent = "Please Fill the feild";
      document.getElementById('msg4').style.color = "red"
   }else{
      document.getElementById('msg4').textContent = "";
      document.getElementById('msg4').style.color = "green";

   }

   if(!dob){
      document.getElementById('msg5').textContent = "Please Fill the feild";
      document.getElementById('msg5').style.color = "red"
   }else{
      document.getElementById('msg5').textContent = "";
      document.getElementById('msg5').style.color = "green";

   }
   
   if(!nominee_name){
      document.getElementById('msg7').textContent = "Please Fill the feild";
      document.getElementById('msg7').style.color = "red"
   }else{
      document.getElementById('msg7').textContent = "";
      document.getElementById('msg7').style.color = "green";
   }

   // if(!nominee_age){
   //    document.getElementById('msg8').textContent = "Please Fill the feild";
   //    document.getElementById('msg8').style.color = "red"
   // }else{
   //    document.getElementById('msg8').textContent = "";
   //    document.getElementById('msg8').style.color = "green";
   // }
   
   // if(!nominee_relation){
   //    document.getElementById('msg9').textContent = "Please Fill the feild";
   //    document.getElementById('msg9').style.color = "red"
   // }else{
   //    document.getElementById('msg9').textContent = "";
   //    document.getElementById('msg9').style.color = "green";
   // }

   if(!city_name){
      document.getElementById('msg13').textContent = "Please Fill the feild";
      document.getElementById('msg13').style.color = "red"
   }else{
      document.getElementById('msg13').textContent = "";
      document.getElementById('msg13').style.color = "green";
   }

   if(!address){
      document.getElementById('msg14').textContent = "Please Fill the feild";
      document.getElementById('msg14').style.color = "red"
   }else{
      document.getElementById('msg14').textContent = "";
      document.getElementById('msg14').style.color = "green";
   }

   if(!pin_code){
      document.getElementById('msg15').textContent = "Please Fill the feild";
      document.getElementById('msg15').style.color = "red"
   }else{
      document.getElementById('msg15').textContent = "";
      document.getElementById('msg15').style.color = "green";
   }

   if(!email){
      document.getElementById('msg16').textContent = "Please Fill the feild";
      document.getElementById('msg16').style.color = "red"
   }else{
      document.getElementById('msg16').textContent = "";
      document.getElementById('msg16').style.color = "green";
   }

   if(!mobile){
      document.getElementById('msg17').textContent = "Please Fill the feild";
      document.getElementById('msg17').style.color = "red"
   }else{
      document.getElementById('msg17').textContent = "";
      document.getElementById('msg17').style.color = "green";
   }

   if(!whats_app){
      document.getElementById('msg18').textContent = "Please Fill the feild";
      document.getElementById('msg18').style.color = "red"
   }else{
      document.getElementById('msg18').textContent = "";
      document.getElementById('msg18').style.color = "green";
   }

   if(!adhar_number){
      document.getElementById('msg19').textContent = "Please Fill the feild";
      document.getElementById('msg19').style.color = "red"
   }else{
      document.getElementById('msg19').textContent = "";
      document.getElementById('msg19').style.color = "green";
   }

   if(!pan_number){
      document.getElementById('msg20').textContent = "Please Fill the feild";
      document.getElementById('msg20').style.color = "red"
   }else{
      document.getElementById('msg20').textContent = "";
      document.getElementById('msg20').style.color = "green";
   }

   if(!account_number){
      document.getElementById('msg24').textContent = "Please Fill the feild";
      document.getElementById('msg24').style.color = "red"
   }else{
      document.getElementById('msg24').textContent = "";
      document.getElementById('msg24').style.color = "green";
   }

   if(!branch_name){
      document.getElementById('msg25').textContent = "Please Fill the feild";
      document.getElementById('msg25').style.color = "red"
   }else{
      document.getElementById('msg25').textContent = "";
      document.getElementById('msg25').style.color = "green";
   }

   if(!ifsc_code){
      document.getElementById('msg26').textContent = "Please Fill the feild";
      document.getElementById('msg26').style.color = "red"
   }else{
      document.getElementById('msg26').textContent = "";
      document.getElementById('msg26').style.color = "green";
   }

   if(!terms_condition.checked){
      document.getElementById('msg27').textContent = "Accept Terms & condition";
      document.getElementById('msg27').style.color = "red"
   }else{
      document.getElementById('msg27').textContent = "";
   }
}



var configApi = {
   cUrl : 'https://api.countrystatecity.in/v1/countries',
   cKey : "bzF6U1hNaTY5UlhVUzdEMm1wTWVEOVJZR0VpV0VIZkF6clhyT1hnSg==",
}

let selectCountry = document.getElementById('countries_name');
let selectState = document.getElementById('state_update');
let selectDistrict = document.getElementById('district_update');
let selects = document.querySelectorAll('select');

function loadData(){
   let endPoint = configApi.cUrl

   fetch(endPoint, {headers : {"X-CSCAPI-KEY" : configApi.cKey}})
   .then(Response => Response.json())
   .then(data => {
       // console.log(data);

       data.forEach(elem => {

           let options = document.createElement('option');
           options.value = elem.iso2;
           options.textContent = elem.name;
           selectCountry.appendChild(options);
           if(elem.iso2 === "IN"){
               options.selected = "true"
               loadStates();
           }
       });
   }).catch(err => console.error("Eror loading countries:", err));

   selectState.disabled = true;
   selectState.style.pointerEvents = "none";
   selectDistrict.disabled = true;
   selectDistrict.style.pointerEvents = "none";
}

function loadStates(){

   selectState.disabled = false;
   selectState.style.pointerEvents = "auto";
   selectDistrict.disabled = true;
   selectDistrict.style.pointerEvents = "none";

   const selectedState = selectCountry.value;
   console.log(selectedState);

   selectState.innerHTML = `<option value="">Select State</option>`;

   fetch(`${configApi.cUrl}/${selectedState}/states`, {headers : {"X-CSCAPI-KEY" : configApi.cKey}})
   .then(res => res.json())
   .then(dt => {
       console.log(dt);
       dt.forEach(state => {
           let options = document.createElement('option');
           options.value = state.iso2;
           options.textContent = state.name;
           console.log(state.name)
           selectState.appendChild(options);
           if(state.iso2 === "IN"){
               options.selected = "true";
               loadCities();
           }
           console.log(options);
       })
   }).catch(err => console.error("Eror loading countries:", err));
}

function loadCities(){
   
   selectDistrict.disabled = false;
   selectDistrict.style.pointerEvents = "auto";

   const selectedCountryCode = selectCountry.value;
   const selectedStateCode = selectState.value; 
   console.log(selectedCountryCode, selectedStateCode);

   selectDistrict.innerHTML = `<option value="">Select District</option>`;

   fetch(`${configApi.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers : {"X-CSCAPI-KEY" : configApi.cKey}})
   .then(res => res.json())
   .then(dtt => {
       console.log(dtt);
       dtt.forEach(city => {
           let options = document.createElement('option');
           options.value = city.iso2;
           options.textContent = city.name;
           selectDistrict.appendChild(options);
           console.log(options);
       })
   }).catch(err => console.error("Eror loading countries:", err));
}

window.onload = loadData;







    
    
