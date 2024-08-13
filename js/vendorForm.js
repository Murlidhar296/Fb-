let valid = false;
let submitAction = document.getElementById('submit');
// let form = document.getElementById('form');

submitAction.addEventListener('click', (e) => {

    e.preventDefault();
    let vendorName = document.getElementById('vendor_name').value;
    let category = document.querySelector('#category');
    let mobile = document.getElementById('mobile').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state'); 
    let email = document.getElementById('email').value;
    // let whatsapp = document.getElementById('whatsapp').value;
    // let b_details = document.getElementById('b_details').value;
    let cashback = document.getElementById('cashback').value;
    console.log(cashback);
    // let business = document.getElementById('b_details').value;
    let terms_condition = document.getElementById('terms_condition').checked;
    let file = document.getElementById('file_upload').value;
    // let minBill = document.getElementById('amountsss').value;


    if(!vendorName){
        document.getElementById('msg2').style.color = "red";
        document.getElementById('msg2').textContent = "please Enter Vendor name";
    }
    
    if(!category.value){
        document.getElementById('msg5').textContent = "please select any one category";
        document.getElementById('msg5').style.color = "red";
    }
    
    if(!mobile){
        document.getElementById('msg6').textContent = "Please Enter Mobile Number !";
        document.getElementById('msg6').style.color = "red";
    }
    
    if(!city){
        document.getElementById('msg10').textContent = "Please Enter City name !";
        document.getElementById('msg10').style.color = "red";
    }

    if(!state.value){ 
        document.getElementById('msg8').textContent = "Select Anyone State !";
        document.getElementById('msg8').style.color = "red";
    }

    if(!email){
        document.getElementById('msg13').textContent = "Please Enter Your Email !";
        document.getElementById('msg13').style.color = "red";
    }

    // if(!whatsapp){
    //     document.getElementById('msg14').textContent = "Please Enter Whatsapp No !";
    //     document.getElementById('msg14').style.color = "red";
    // }

    // if(!b_details){
    //     document.getElementById('msg18').textContent = "Please Enter minimum bill Amount !"
    //     document.getElementById('msg18').style.color = "red"
    // }

    if(!cashback){
        document.getElementById('msg166').textContent = "Please Enter cashback!";
        document.getElementById('msg166').style.color = "red";
    }

    // if(!business){
    //     document.getElementById('msg20').textContent = "Please Enter Business Details !";ś
    //     document.getElementById('msg20').style.color = "red";
    // }

    if(!file){
        document.getElementById('msg19').textContent = "Please upload Company image! , Please upload Vendor image !,Please upload Adhar Card image !,";
        document.getElementById('msg19').style.color = "red";
    }

    if(!terms_condition){
        document.getElementById('msg24').textContent = "Please Accept terms & condition !";
        document.getElementById('msg24').style.color = "red";
    }

    // if(!minBill){
    //     document.getElementById('msg18').textContent = "Please Enter minimun bill amount !";
    //     document.getElementById('msg18').style.color = "red";
    // }


    imageExtension();
});

document.getElementById('vendor_name').addEventListener('input', validateVendor);
document.getElementById('category').addEventListener('input', validateVendor);
document.getElementById('mobile').addEventListener('input', mobile);
document.getElementById('city').addEventListener('input', city);
document.getElementById('state').addEventListener('input', validateVendor);
document.getElementById('email').addEventListener('input', email);
// document.getElementById('whatsapp').addEventListener('input', whatsapp);ss   
// document.getElementById('amount').addEventListener('input',min_bill);
// document.getElementById('cashback').addEventListener('input', cashback);
document.getElementById('cashback').addEventListener('input', cashback);
// document.getElementById('b_details').addEventListener('input', business);
// document.getElementById('file_upload').addEventListener('input', imageExtension(this));
document.getElementById('terms_condition').addEventListener('input', validateVendor);


function validateVendor(){
    let vendorName = document.getElementById('vendor_name').value;
    let category = document.getElementById('category');
    let state = document.getElementById('state')
    
    if(!(!vendorName)){
        document.getElementById('msg2').textContent = "";
    }

    if(!(!state.value)){
        document.getElementById('msg8').textContent = "";
    }

    if(!(!category.value)){
        document.getElementById('msg5').textContent = "";
    }

    // if(!(!terms_condition.checked)){
    //     document.getElementById('msg24').textContent = "";
    // }
};

document.getElementById('terms_condition').addEventListener('input', () => {
    if(!(!terms_condition)){
        document.getElementById('msg24').textContent = "";
    }
})

    function city(){
        if(!(!city)){
            document.getElementById('msg10').textContent = "";
        }
    }

    function mobile(){
        if(!(!mobile)){
            document.getElementById('msg6').textContent = "";
        }
    }

    function email(){
        if(!(!email)){
            document.getElementById('msg13').textContent = "";
        }
    }

    // function whatsapp(){
    //     if(!(!whatsapp)){
    //         document.getElementById('msg14').textContent = "";
    //     }
    // }

    // function min_bill(){
    //     if(!(!b_details)){
    //         document.getElementById('msg18').textContent = "";
    //     }
    // }

    function cashback(){
        if(!(!cashback)){
            document.getElementById('msg166').textContent = "";
        }
    };

    function business(){
        if(!(!business)){
            document.getElementById('msg20').textContent = "";
        }
    }

    function imageExtension(){
        const file = document.getElementById('file_upload');
        const files= file.files[0];
        // const limit = 2000;
        // const size = files.size/1024;

        if(!files){
            document.getElementById('msg19').textContent = "Please upload Company image!";
            document.getElementById('msgs19').textContent = "Please upload Vendor image !";
            document.getElementById('msgss19').textContent = "Please upload Adhar Card image !,";
            document.getElementById('msg19').style.color = "red";
            document.getElementById('msgs19').style.color = "red";
            document.getElementById('msgss19').style.color = "red";
        }
        // else if(file.size > limit){
        //     document.getElementById('msg19').textContent = "Files size only 2kb";
        // }
        else{
            document.getElementById('msg19').textContent = "";
            document.getElementById('msgs19').textContent = "";
            document.getElementById('msgss19').textContent = "";
            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${selectedCountry}&key=YOUR_OPENCAGE_API_KEY`)
        }

        // for(var i = 0; i<=ext.length; i++){
        //     if(ext[i] == file_extension ){
        //         document.getElementById('msg19').textContent = "";
        //         valid = true;
        //         return;
        //     }
        //     else{
        //         document.getElementById('msg19').textContent = "Please upload Company image! , Please upload Vendor image !,Please upload Adhar Card image !,";
        //         document.getElementById('msg19').style.color = "red";
        //     }
           
        // }
    }
    //    SELCECT COUNTRY STATE AND DISTRICT PART 


    // window.onload = () => {
    //     let selectCountry = document.getElementById('country_name');
    //     let selectState = document.getElementById('state');
    //     let selectDistrict = document.getElementById('dist');
    //     let selects = document.querySelectorAll('select')
        
    //     selectState.disabled = true;
    //     selectDistrict.disabled = true;
    //     selectCountry[0].seleted =  true;
        
    //     selects.forEach(select => {
    //         if(selectState.disabled = true){    
    //             select.style.cursor = "auto";
    //             select.style.poi = "auto";
    //         }
    //     })

    //     for(let country in worldInfo){
    //         console.log(country);
    //         selectCountry.options[selectCountry.options.length] = new Option(country)
    //     }

    //     selectCountry.onchange = (e) => {
    //         selectState.disabled = false;
    //         // selectDistrict.disabled = true;

    //         selectState.length = 1;
    //         selectDistrict.length = 1;

    //         for(let state in worldInfo[e.target.value]){
    //             console.log(state);
    //             selectState.options[selectState.options.length] = new Option(state);
    //         }
    //     }

    //     selectState.onchange =  (e) => {
    //         selectDistrict.disabled = false;
           
    //         selectDistrict.length = 1;
            

    //         let zips = worldInfo[selectCountry.value][e.target.value];

    //         for(let i = 0; i < zips.length; i++){
    //             selectDistrict.options[selectDistrict.options.length] = new Option(zips[i], zips[i]);
    //         }
    //     }
    // }


    // function populate(s1,s2){

    //     var s1 = document.getElementById('country_name').value;
    //     var s2 = document.getElementById('state');

    //     s2.innerHTML = "";

    //     if(s1 == "Bharat"){
    //         var optionArray = ["delhi|Delhi", "mumbai|Mumbai", "bangaluru|Bengluru", "kolkata|KolKata", "chennai|Chennai"];
    //     }

    //     for(let option in optionArray){
    //         var pair = optionArray[option].split('|');
    //         var newOption = document.createElement('option');

            
    //         newOption.value = pair[0];
    //         newOption.innerHTML = pair[1];
    //         s2.options.add(newOption);
    //     }
    // }

    // var configApi = {
    //     cUrl : 'https://api.countrystatecity.in/v1/countries',
    //     cKey : "bzF6U1hNaTY5UlhVUzdEMm1wTWVEOVJZR0VpV0VIZkF6clhyT1hnSg==",
    // }

    // let selectCountry = document.getElementById('country_name');
    // let selectState = document.getElementById('state');
    // let selectDistrict = document.getElementById('dist');
    // let selects = document.querySelectorAll('select');

    // function loadData(){
    //     let endPoint = configApi.cUrl

    //     fetch(endPoint, {headers : {"X-CSCAPI-KEY" : configApi.cKey}})
    //     .then(Response => Response.json())
    //     .then(data => {
    //         // console.log(data);

    //         data.forEach(elem => {

    //             let options = document.createElement('option');
    //             options.value = elem.iso2;
    //             options.textContent = elem.name;
    //             selectCountry.appendChild(options);
    //             if(elem.iso2 === "IN"){
    //                 options.selected = "true"
    //                 loadStates();
    //             }
    //         });
    //     }).catch(err => console.error("Eror loading countries:", err));

    //     selectState.disabled = true;
    //     selectState.style.pointerEvents = "none";
    //     selectDistrict.disabled = true;
    //     selectDistrict.style.pointerEvents = "none";
    // }

    // function loadStates(){

    //     selectState.disabled = false;
    //     selectState.style.pointerEvents = "auto";
    //     selectDistrict.disabled = true;
    //     selectDistrict.style.pointerEvents = "none";

    //     const selectedState = selectCountry.value;
    //     console.log(selectedState);

    //     selectState.innerHTML = `<option value="">Select State</option>`;

    //     fetch(`${configApi.cUrl}/${selectedState}/states`, {headers : {"X-CSCAPI-KEY" : configApi.cKey}})
    //     .then(res => res.json())
    //     .then(dt => {
    //         console.log(dt);
    //         dt.forEach(state => {
    //             let options = document.createElement('option');
    //             options.value = state.iso2;
    //             options.textContent = state.name;
    //             console.log(state.name)
    //             selectState.appendChild(options);
    //             if(state.iso2 === "IN"){
    //                 options.selected = "true";
    //                 loadCities();
    //             }
    //             console.log(options);
    //         })
    //     }).catch(err => console.error("Eror loading countries:", err));
    // }

    // function loadCities(){
        
    //     selectDistrict.disabled = false;
    //     selectDistrict.style.pointerEvents = "auto";

    //     const selectedCountryCode = selectCountry.value;
    //     const selectedStateCode = selectState.value; 
    //     console.log(selectedCountryCode, selectedStateCode);

    //     selectDistrict.innerHTML = `<option value="">Select District</option>`;

    //     fetch(`${configApi.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers : {"X-CSCAPI-KEY" : configApi.cKey}})
    //     .then(res => res.json())
    //     .then(dtt => {
    //         console.log(dtt);
    //         dtt.forEach(city => {
    //             let options = document.createElement('option');
    //             options.value = city.iso2;
    //             options.textContent = city.name;
    //             selectDistrict.appendChild(options);
    //             console.log(options);
    //         })
    //     }).catch(err => console.error("Eror loading countries:", err));
    // }

    // window.onload = loadData;
    
    // window.onload = loadData;

    // function loadData() {
    //     let endPoint = configApi.cUrl;
    
    //     fetch(endPoint, { headers: { "X-CSCAPI-KEY": configApi.cKey } })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }
    
    // window.onload = loadData;
    


    // document.addEventListener("DOMContentLoaded", () => {

    //     // const selectDrops = document.querySelectorAll();
    //     let selectCountry = document.getElementById('country_name');
    //     // let selectState = document.getElementById('state');
    //     // let selectDistrict = document.getElementById('dist');
    //     // let selects = document.querySelectorAll('select')

    //     fetch('https://restcountries.com/v3.1/all').then(res => {
    //         return res.json();
    //     }).then(data => {
    //         let output = "";
    //         data.forEach(country => {
    //             // console.log(country.name);
    //             output += JSON.stringify(`<option>${country.name}</option>`);
    //             // JSON.stringify(output);
    //         });
    //         selectCountry.innerHTML =  output;
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // })

    // document.addEventListener("DOMContentLoaded", () => {
    //     let selectCountry = document.getElementById('country_name');
    
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(res => res.json())
    //         .then(data => {
    //             let options = "";
    //             data.forEach(country => {
    //                 options += `<option>${country.name.common}</option>`;
    //             });
    //             selectCountry.innerHTML = options;
    //         })
    //         .catch(err => {
    //             console.error('Error fetching data:', err);
    //         });
    // });

    // document.addEventListener("DOMContentLoaded", () => {
    //     const countrySelect = document.getElementById('country_name');
    //     const stateSelect = document.getElementById('state');
    //     const citySelect = document.getElementById('dist');
    
    //     // Fetch all countries and populate the country dropdown
    //     fetch('https://restcountries.com/v3.1/all')
    //         .then(response => response.json())
    //         .then(data => {
    //             data.forEach(country => {
    //                 const option = document.createElement('option');
    //                 option.value = country.name.common;
    //                 option.textContent = country.name.common;
    //                 console.log(option);
    //                 countrySelect.appendChild(option);
    //             });
    //         })
    //         .catch(error => console.error('Error fetching countries:', error));
    
    //     // Function to fetch and populate states and cities based on the selected country
    //     countrySelect.addEventListener('change', () => {
    //         const selectedCountry = countrySelect.value;
    //         if (!selectedCountry) return; // If no country selected, do nothing
    
    //         // Clear state and city dropdowns
    //         stateSelect.innerHTML = '<option value="">Select State</option>';
    //         citySelect.innerHTML = '<option value="">Select City</option>';
    
    //         // Fetch states and cities for the selected country from OpenCage Geocoding API
    //         fetch(`https://api.opencagedata.com/geocode/v1/json?q=${selectedCountry}&key=YOUR_OPENCAGE_API_KEY`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 if (data.results.length > 0) {
    //                     const components = data.results[0].components;
    //                     const state = components.state;
    //                     const city = components.city;
    
    //                     // Populate state dropdown
    //                     if (state) {
    //                         const option = document.createElement('option');
    //                         option.value = state;
    //                         option.textContent = state;
    //                         stateSelect.appendChild(option);
    //                     }
    
    //                     // Populate city dropdown
    //                     if (city) {
    //                         const option = document.createElement('option');
    //                         option.value = city;
    //                         option.textContent = city;
    //                         citySelect.appendChild(option);
    //                     }
    //                 }
    //             })
    //             .catch(error => console.error('Error fetching states and cities:', error));
    //     });
    // });
    
    