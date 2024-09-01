document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.getElementById('header-title');
    const aboutLink = document.getElementById('about-link');
    const skillsLink = document.getElementById('skills-link');
    const projectsLink = document.getElementById('projects-link');
    const aboutMeContainer = document.querySelector('.aboutme-container');
    const skillsContainer = document.querySelector('.skills-container');
    const projectsContainer = document.querySelector('.projects-container');
    skillsContainer.style.display = 'none';
    projectsContainer.style.display = 'none';

    const technicalSkills = ['Python', 'Java', 'Vue js 2', 'ROS'];
    const softSkills = ['Trabajo en equipo', 'Tolerancia a la presión', 'Adaptabilidad', 'Empatía'];

    function showAboutMe() {
        aboutMeContainer.style.display = 'block';
        headerTitle.style.display = 'none';
        skillsContainer.style.display = 'none';
        projectsContainer.style.display = 'none';

        if (!aboutMeContainer.querySelector('p')) {
            const paragraph = document.createElement('p');
            paragraph.style.fontSize = '2.25rem';
            paragraph.style.textAlign = 'center'; 
            paragraph.style.margin = '0 2rem';
            paragraph.textContent = `Ingeniera en Computación e Informática de la Universidad Católica del Norte recién 
                egresada, tengo conocimientos en la implementación de desarrollo FullStack, abarcando 
                tanto el desarrollo Frontend como Backend. Me considero una persona responsable, 
                orientada al trabajo en equipo y capaz de adaptarme a diferentes entornos y situaciones. 
                Estoy entusiasmada por aplicar mis conocimientos y contribuir al éxito de proyectos 
                innovadores en el campo de la tecnología.`;
            
            aboutMeContainer.appendChild(paragraph);
        }
    }

    function showSkills() {
        skillsContainer.style.display = 'block';
        aboutMeContainer.style.display = 'none';
        projectsContainer.style.display = 'none';

        const technicalSkillsList = document.querySelector('.technical-skills');
        technicalSkillsList.innerHTML = '';

        const softSkillsList = document.querySelector('.soft-skills');
        softSkillsList.innerHTML = '';

        technicalSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            technicalSkillsList.appendChild(li);
        });

        softSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            softSkillsList.appendChild(li);
        });
    }

    function showProjects() {
        projectsContainer.style.display = 'block';
        aboutMeContainer.style.display = 'none';
        skillsContainer.style.display = 'none';

    }

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        showAboutMe();
    });

    skillsLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSkills();
    });

    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        showProjects();
    });

    const form = document.querySelector('#modal-contacto form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Validar que las variables se envien con el tipo de dato correcto y que se haya llenado completamente
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            const nombreRegex = /^[A-Za-z\s]+$/;
            if (!nombreRegex.test(nombre)) {
                alert('El campo nombre no debe contener números ni caracteres especiales.');
                return;
            }
            if (!email || !email.includes('@')) {
                alert('Por favor, ingresa un email válido.');
                return;
            }
            if (!mensaje) {
                alert('El campo mensaje no puede estar vacío.');
                return;
            }
            alert('¡Gracias por contactarme!');
            const modal = bootstrap.Modal.getInstance(document.querySelector('#modal-contacto'));
            modal.hide();
        });
    }
});

