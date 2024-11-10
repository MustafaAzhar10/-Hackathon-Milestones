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
                <h2><b>Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>
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
