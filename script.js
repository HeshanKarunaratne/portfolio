function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var workExperience = [
  { position: "Associate Tech Lead", company: "Mitra Innovation", duration: "Oct 2022 - Mar 2024" },
  { position: "Senior Software Engineer", company: "Mitra Innovation(Outsourced to Sysco Labs)", duration: "Nov 2021 - Sep 2022" },
  { position: "Senior Software Engineer", company: "Axiata Digital Labs", duration: "Apr 2020 - Oct 2021" },
  { position: "Software Engineer", company: "Axiata Digital Labs", duration: "Apr 2019 - Mar 2020" },
  { position: "Trainee Software Engineer", company: "Dialog Axiata", duration: "Aug 2018 - Mar 2019" }
];

var certifications = [
  { name: "AWS Certified Developer - Associate", year: "2023" },
  { name: "AWS Certified Cloud Practitioner", year: "2023" },
  { name: "Google Cloud Certified Professional Cloud Architect", year: "2021" },
  { name: "AWS Certified Solutions Architect - Associate", year: "2020" },
  { name: "Processmaker Certified Advanced Architect", year: "2019" },
  { name: "RPA Developer", year: "2019" }
];

function getWorkExperience(){
  
  var workExperienceContainer = document.getElementById("workExperienceList");
  for (var i = 0; i < workExperience.length; i++) {
  
    var articleTag = document.createElement("article");
    var divTag = document.createElement("div");
    var positionTag = document.createElement("h3");
    var companyTag = document.createElement("h3");
    var durationTag = document.createElement("p");
  
    positionTag.textContent = workExperience[i].position;
    companyTag.textContent = workExperience[i].company;
    durationTag.textContent = workExperience[i].duration;
  
    divTag.appendChild(positionTag);
    divTag.appendChild(companyTag);
    divTag.appendChild(durationTag);
    articleTag.appendChild(divTag);
    workExperienceContainer.appendChild(articleTag);
  }
}

function getCertifications(){
  
  var certificateContainer = document.getElementById("certificateList");
  for (var i = 0; i < workExperience.length; i++) {
  
    var articleTag = document.createElement("article");
    var divTag = document.createElement("div");
    var nameTag = document.createElement("h3");
    var yearTag = document.createElement("p");

    nameTag.textContent = certifications[i].name;
    yearTag.textContent = certifications[i].year;
  
    divTag.appendChild(nameTag);
    divTag.appendChild(yearTag);

    articleTag.appendChild(divTag);
    certificateContainer.appendChild(articleTag);
  }
}

getWorkExperience()
getCertifications()