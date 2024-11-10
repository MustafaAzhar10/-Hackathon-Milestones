const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const nameElement = document.getElementById('name') as HTMLInputElement | null;
        const emailElement = document.getElementById('email') as HTMLInputElement | null;
        const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
        const educationElement = document.getElementById('education') as HTMLInputElement | null;
        const experienceElement = document.getElementById('experience') as HTMLInputElement | null;
        const skillsElement = document.getElementById('skills') as HTMLInputElement | null;

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
        } else {
            console.error('One or more form elements are missing.');
        }
    });
} else {
    console.error('The resume form element is missing.');
}
