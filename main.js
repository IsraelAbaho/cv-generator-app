const personImage = document.getElementById('file')
const personName = document.getElementById('name')
const personTitle = document.getElementById('title')
const personStartDate = document.getElementById('startDate')
const personEndDate = document.getElementById('endDate')
const topSection = document.getElementById('cvTop')
const experienceSection = document.getElementById('cvExperienceDiv')
const mainButton = document.getElementById('previewBtn')


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
 
    
}