
// Declaring HTML elements
const file = document.getElementById('file')
const img = document.querySelector('#image')
const personName = document.getElementById('name')
const personTitle = document.getElementById('title')
const personStartDate = document.getElementById('jobStartDate')
const personEndDate = document.getElementById('jobEndDate')
const topSection = document.getElementById('cvTop')
const experienceSection = document.querySelector('.cvExperienceDiv')
const cvProfileSection = document.querySelector('.cvProfileSection')
const cvContainer = document.querySelector('.cvContainer')
const mainButton = document.getElementById('previewBtn')
const newExperienceDiv = document.getElementById('newExp') 
const experienceBtn = document.getElementById('addCompBtn')



// Function to change image
file.addEventListener('change', function(){
  const choosedFile = this.files[0]
  if(choosedFile){
      const reader = new FileReader();
      
      reader.addEventListener('load', function(){
         img.setAttribute('src', reader.result)  
      })
      reader.readAsDataURL(choosedFile)
  }
})


// EVENTLISTENER -----
mainButton.addEventListener('click', submitForm)



function submitForm(e){
    e.preventDefault()
    let btn = e.target;

    // personalDetails Declaration
    let pImage = btn.parentElement.parentElement.children[0].children[0].children[0].src

    let pName = btn.parentElement.parentElement.children[0].children[1].children[1].children[1].value

    let pTitle = btn.parentElement.parentElement.children[0].children[1].children[2].children[1].value
   
    let pTelNumber = btn.parentElement.parentElement.children[0].children[2].children[1].children[1].value

    let pEmail = btn.parentElement.parentElement.children[0].children[2].children[2].children[1].value

    let pWebsite = btn.parentElement.parentElement.children[0].children[2].children[3].children[1].value
    

    // Experience Section Declaration
    let expSection = btn.parentElement.parentElement.children[1]
    let companyName = expSection.children[1].children[0].children[0].children[1].value
   
    let jobTitle = expSection.children[1].children[0].children[1].children[1].value

    let startDate = expSection.children[1].children[1].children[0].children[1].value

    let endDate = expSection.children[1].children[1].children[1].children[2].value

    let jobDescription = expSection.children[1].children[2].children[1].value
  
     
    // Profile section declaration
    
    let profileSummary = btn.parentElement.parentElement.children[2].children[1].children[1].value
 
    let certificate = btn.parentElement.parentElement.children[2].children[2].children[0].children[0].children[1].value
   
    let collegeName = btn.parentElement.parentElement.children[2].children[2].children[0].children[1].children[1].value
    
    let colStartDate = btn.parentElement.parentElement.children[2].children[2].children[1].children[0].children[1].value
  
    let colEndDate = btn.parentElement.parentElement.children[2].children[2].children[1].children[1].children[2].value
   
    let pSkill = btn.parentElement.parentElement.children[2].children[3].children[0].children[0].children[1].children[0].value
  
    let pHobby = btn.parentElement.parentElement.children[2].children[3].children[0].children[1].children[1].children[0].value
   
  

    // Hello please i have a problem, help me i want if any of the inputs is not filled, the button function doesnt work unless all are filled. I want the unfilled box to have a red border. I have written this code below but when i fill a single field still the function is complete which is not okay. CAN YOU HELP PLEASE
  const allInputs = document.querySelectorAll('.input')
  allInputs.forEach(inputt =>{
  if(inputt.value === ''){
    inputt.style.border = '2px solid red'
  }
  else{
    // TOP SECTION DIVISIONS --------------------------
//Creating new div element for image.   
let imageDiv = document.createElement('div')
imageDiv.classList.add('cvTopDiv')
imageDiv.innerHTML = `<img src="${pImage}">`
//Divison to that contains both the name and title. 
let pNameTitle = document.createElement('div')
pNameTitle.classList.add('cvNameDiv')
// Craeting name division element
let pNameEntered = document.createElement('div')
pNameEntered.classList.add('cvName')
pNameEntered.innerHTML = `<h2>${pName}</h2>`
pNameTitle.appendChild(pNameEntered)

// Creating title divsion element
let pTitleEntered = document.createElement('div')
pTitleEntered.classList.add('cvProff')
pTitleEntered.innerHTML = `<p>${pTitle}</p>`
pNameTitle.appendChild(pTitleEntered)

//Creating a new div element to hold phone number, email and website
let contactDiv = document.createElement('div')
contactDiv.classList.add('cvContactDiv') 

// Creating anew div element for tel Number
let telNumber = document.createElement('div')
telNumber.innerHTML =  `<i class='bx bx-phone icon' ></i>
               <h4>${pTelNumber}</h4>`
contactDiv.appendChild(telNumber)   

// Creating a new div element for the Email entered.
let emialEntered = document.createElement('div')
emialEntered.innerHTML = `  <i class='bx bx-mail-send icon'></i>
<h4>${pEmail}</h4>`
contactDiv.appendChild(emialEntered) 

// Creating a new div element for the Website link entered.
let websiteEntered = document.createElement('div')
websiteEntered.innerHTML = `  <i class='bx bx-globe icon'></i>
<h4>${pWebsite}</h4>`
contactDiv.appendChild(websiteEntered) 

// Appending  all the divisions to the main section.
topSection.appendChild(imageDiv)
topSection.appendChild(pNameTitle)
topSection.appendChild(contactDiv)

// EXPERIENCE SECTION DIVISIONS
//  new div element for company details
let companyDetail = document.createElement('div')
companyDetail.classList.add('companyDetails')
experienceSection.style.marginTop = '2rem'


// Creating a new div element to enter company name
let compName = document.createElement('div')
compName.innerHTML = `<h3 class="titles">PREVIOUS JOB</h3><p class="companyName">${companyName}</p>`
companyDetail.appendChild(compName)

// Creating a new div element to enter job title
let jobT = document.createElement('div')
jobT.innerHTML = `<p class="jobTitle">${jobTitle}</p>`
companyDetail.appendChild(jobT)

// Creating a new div element to enter dates
let dates = document.createElement('div')
dates.classList.add('dates')

// creating a new div to enter startdate
let strtDate = document.createElement('div')
strtDate.classList.add('startDate')
strtDate.innerHTML = `${startDate}`
dates.appendChild(strtDate) 

// creating a new div to enter endDate
let end_Date = document.createElement('div')
end_Date.classList.add('endDate')
end_Date.innerHTML = `${endDate}`
dates.appendChild(end_Date) 

// creating a new div to enter description
let jobDesc = document.createElement('div')
jobDesc.classList.add('jobDesc')
jobDesc.innerHTML = `${jobDescription}`




// // append company details to the main section
experienceSection.appendChild(companyDetail)
experienceSection.appendChild(dates)
experienceSection.appendChild(jobDesc)


//PROFILE DETAILS SECTION 
// let us  create a new div to enter profile summary
let pSummary = document.createElement('div')
pSummary.classList.add('pSummary')
pSummary.innerHTML = ` <h3 class="titles">Profile</h3>
<p>
${profileSummary}
</p>` 


// let us  create a new div to enter college name and certficate 
let collegeCert = document.createElement('div')
collegeCert.classList.add('colCert')
collegeCert.innerHTML = `<h3 class="titles">EDUCATION</h3><h4 class="cerficate">${certificate}</h4>
<p class="college">${collegeName}</p>`

// let us  create a new div to enter college start and end dates 
let collegeDates = document.createElement('div')
collegeDates.classList.add('collegeDatesDiv')
collegeDates.innerHTML = 
` <div class="collegeStartDate">${colStartDate}</div>
<div class="collegeEndDate">${colEndDate}</div>`


// let us  create a new div to enter skills and Hobbies
let skillHobby = document.createElement('div')
skillHobby.classList.add('skillHobbyDiv')
skillHobby.innerHTML = 
`<div class="personSkills">
<h3 class="titles">EXPERTISE</h3>
${pSkill}</div>
<div class="personHobby">
<h3 class="titles">HOBBIES</h3>
${pHobby}
</div>`


cvProfileSection.appendChild(pSummary)
cvProfileSection.appendChild(collegeCert)
cvProfileSection.appendChild(collegeDates)
cvProfileSection.appendChild(skillHobby)


 }
 })
  
}  
 


