"use strict";
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameElement = document.getElementById('name');
        const emailElement = document.getElementById('email');
        const phoneElement = document.getElementById('phone');
        const educationElement = document.getElementById('education');
        const experienceElement = document.getElementById('experience');
        const skillsElement = document.getElementById('skills');
        // Ensure all elements exist before accessing their values
        if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && resumeDisplayElement) {
            const name = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;
            const resumeHTML = `
                <h2><b> Editable Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b>Name:</b><span contenteditable="true">${name}</span></p>
                <p><b>Email:</b><span contenteditable="true">${email}</span></p>
                <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

                <h3>Education</h3>
                <p contenteditable="true">${education}</p>

                <h3>Experience</h3>
                <p contenteditable="true">${experience}</p>

                <h3>Skills</h3>
                <p contenteditable="true">${skills}</p>
            `;
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('One or more form elements are missing.');
        }
    });
}
else {
    console.error('The resume form element is missing.');
}
