let formHolder = document.getElementById('formHolder');

let myFormEl = document.getElementById("myForm");
let myForm2 = document.getElementById("myForm2");
let myForm3 = document.getElementById("myForm3");

let fNameEl = document.getElementById("fName");
let fNameErrMsgEl = document.getElementById("fNameErrMsg");
let countryStatusEl = document.getElementById("status");
let state = document.getElementById("state");
let phone = document.getElementById("phone");
let phoneErrMsg = document.getElementById("phoneErrMsg");

let logo = document.getElementById("logo");
let logoErrMsg = document.getElementById("logoErrMsg");
let companyName = document.getElementById("companyName");
let logoUpload = document.getElementById("logoUpload");
let cmpnyErrMsg = document.getElementById("cmpnyErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let jobTitle = document.getElementById("jobTitle");
let jobErrMsg = document.getElementById("jobErrMsg");
let experience = document.getElementById("experience");
let expErrMsg = document.getElementById("expErrMsg");
let termsAndCond = document.getElementById("termsAndCond");

let otp = document.getElementById("otp");
let otpErrMsg = document.getElementById("otpErrMsg");

//let displayDetailsContainer = document.getElementById('displayDetailsContainer');

let submit1 = document.getElementById('submit1');
let submit2 = document.getElementById('submit2');
let submit3 = document.getElementById('submit3');

let back1 = document.getElementById("back1");
let back2 = document.getElementById("back2");

let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');

let sectionPersonal = document.getElementById('sectionPersonal');
let sectionCompany = document.getElementById('sectionCompany');
let sectionEmail = document.getElementById('sectionEmail');

/*let detailsH = document.getElementById('detailsH');
let nameDisplay = document.getElementById('nameDisplay');
let adressDisplay = document.getElementById('adressDisplay');
let phoneDisplay = document.getElementById('phoneDisplay');
let emailDisplay = document.getElementById('emailDisplay');*/

let formData = {
    fName: "",
    statusEl: "India",
    state: 'Tamil Nadu',
    phone: '',
};

fNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fNameErrMsgEl.textContent = "Required*";
    } else {
        fNameErrMsgEl.textContent = "";
    }

    formData.fName = event.target.value;
});

phone.addEventListener("blur", function(event) {
    if (event.target.value === '') {
        submit1.setAttribute('disabled');
        phoneErrMsg.textContent = "Required : 10 digit Number*";
    } else {
        phoneErrMsg.textContent = "";
    }

    formData.phone = event.target.value;
});

countryStatusEl.addEventListener("change", function(event) {
    formData.statusEl = event.target.value;
});

state.addEventListener("change", function(event) {
    formData.state = event.target.value;
});

function validateFormData(formData) {
    let x = false;
    let {
        fName,
        email,
        phone,
        state,
        statusEl
    } = formData;
    if (fName === "") {
        fNameErrMsgEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Required*";
    }
    if (phone === "") {
        phoneErrMsg.textContent = "Required : 10 digit Number*";
    } else {
        x = true;
    }
    return x;
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let x = validateFormData(formData);
    if (x) {
        span2.classList.add('span-dec');
        span1.classList.remove('span-dec');
        span3.classList.remove('span-dec');
        displayDetails(formData);
    }

    function displayDetails(formData) {
        let z = "display('sectionCompany')";
        submit1.setAttribute('onclick', z);
    }
});

let formData2 = {
    logo: '',
    email: "",
    company: "",
    job: "",
    exp: ''
};

logo.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        logoErrMsg.textContent = "Required*";
    } else {
        logoErrMsg.textContent = "";
        logoUpload.classList.remove('d-none');
    }
    formData2.logo = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData2.email = event.target.value;
});

companyName.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        cmpnyErrMsg.textContent = "Required*";
    } else {
        cmpnyErrMsg.textContent = "";
    }
    formData2.company = event.target.value;
});

jobTitle.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        jobErrMsg.textContent = "Required*";
    } else {
        jobErrMsg.textContent = "";
    }
    formData2.job = event.target.value;
});

experience.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        expErrMsg.textContent = "Required*";
    } else {
        expErrMsg.textContent = "";
    }
    formData2.exp = event.target.value;
});

termsAndCond.addEventListener("change", function(event) {
    let {
        exp,
        job,
        email,
        company,
        logo
    } = formData2;
    if ((termsAndCond.checked === true) && (exp !== '' && job !== '' && email !== '' && company !== '' && logo !== '')) {
        submit2.disabled = false;
    } else {
        submit2.disabled = true;
    }
});

function back1Func() {
    span3.classList.remove('span-dec');
    span2.classList.remove('span-dec');
    span1.classList.add('span-dec');
}

function submit2Func() {
    span2.classList.remove('span-dec');
    span3.classList.add('span-dec');
    span1.classList.remove('span-dec');
}

myForm2.addEventListener("submit", function(event) {
    event.preventDefault();
});

myForm3.addEventListener("submit", function(event) {
    event.preventDefault();
});

function back2Func() {
    span3.classList.remove('span-dec');
    span2.classList.add('span-dec');
    span1.classList.remove('span-dec');
}

otp.addEventListener("change", function(event) {
    if (event.target.value === "") {
        otpErrMsg.textContent = "Required*";
    } else {
        otpErrMsg.textContent = "";
    }
    let otpVal = event.target.value;

    if (otpVal === '') {
        submit3.disabled = true;
    } else {
        submit3.disabled = false;
    }
});





/*


    <div class="user-details-section mt-5 ml-auto mr-auto mb-5 w-75 w-md-50 p-5" id="displayDetailsContainer">
        <div class="m-auto align-items-center">
            <h1 class="details-h mb-5" id="detailsH"></h1>
            <p class="p-dec" id="nameDisplay"></p>
            <p class="p-dec" id="adressDisplay"></p>
            <p class="p-dec" id="emailDisplay"></p>
            <p class="p-dec" id="phoneDisplay"></p>
            <p class="p-dec" id="heightDisplay"></p>
            <p class="p-dec" id="weightDisplay"></p>
        </div>
    </div>



detailsH.textContent = 'Check the details you entered';
nameDisplay.textContent = 'Name : ' + formData.fName;
adressDisplay.textContent = 'State and Country : ' + formData.state + ', ' + formData.statusEl;
phoneDisplay.textContent = 'Phone : +91-' + formData.phone;
emailDisplay.textContent = 'E-Mail : ' + formData.email;*/














null;