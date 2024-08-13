
var configApi = {
    cUrl : 'https://api.countrystatecity.in/v1/countries',
    cKey : "bzF6U1hNaTY5UlhVUzdEMm1wTWVEOVJZR0VpV0VIZkF6clhyT1hnSg==",
 }
 
 let selectCountry = document.getElementById('country_name');
 let selectState = document.getElementById('state');
 let selectDistrict = document.getElementById('dist');
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