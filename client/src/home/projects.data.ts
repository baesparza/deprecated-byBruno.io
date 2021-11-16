export interface ProjectModel {
    projectName: string;
    appName?: string;
    description: string;
    projectUrl?: string;
    backgroundSmallUrl: string;
}

export const ProjectsData: Readonly<Array<ProjectModel>> = [
    {
        projectName: 'Lab Móvil 2222',
        projectUrl: 'https://labmovil2222.utpl.edu.ec/',
        description: `2222 is a fantastic 35-day journey through an app through 12 cities in the history of humankind and themes. It begins on November 15 from our origin in Quitu towards the harmony and wisdom of Shangri-La. The traveler of 2222 is a teacher who learns permanently. You start the journey with a personal challenge and end it with a teaching innovation project to start running at your school.`,
        backgroundSmallUrl: 'https://firebasestorage.googleapis.com/v0/b/labs-63faf.appspot.com/o/lab-movil-2222.png?alt=media&token=cd4a572f-a661-4ff7-806d-0e8279730d1f',
    },
    {
        projectName: 'Expo UTPL 360',
        description: `In a dynamic environment for both Web and Mobile, the Private Technical University of Loja (UTPL) will expose its academic offer of the degree of the Face-to-face, Open and Distance Modality, admission process, scholarships, student mobility, projects, innovation ecosystem, and entrepreneurship, among others, to students, teachers, and parents from all over the country`,
        backgroundSmallUrl: 'https://firebasestorage.googleapis.com/v0/b/labs-63faf.appspot.com/o/casa-abierta.png?alt=media&token=e748a3ce-81a1-49a1-900f-de2b0d0f4512',
    },
    {
        appName: 'Fossi Quest!',
        projectName: 'Lectulab',
        projectUrl: 'https://lecturlab-jmzwm.ondigitalocean.app/',
        description: `Reading is the axis of all education and, therefore, one of the current concerns, so through this innovation project, we want to solve this problem. Our objective is to strengthen reading competence in children aged 5 to 6 years to attend inclusive, comprehensive training.`,
        backgroundSmallUrl: 'https://firebasestorage.googleapis.com/v0/b/labs-63faf.appspot.com/o/lectulab.png?alt=media&token=a498bdf0-0ace-45eb-8ede-bc48ff383e7d',
    },
    {
        projectName: 'Gran Rifa Solidaria',
        description: `During the harshest months of the pandemic caused by the SARS-COV19 virus, BINNARIUM developed a website to carry out a VIRTUAL RAFFLE to help the victims' families COVID financially.`,
        backgroundSmallUrl: 'https://firebasestorage.googleapis.com/v0/b/labs-63faf.appspot.com/o/lottery.png?alt=media&token=6c3754de-1f74-4f8e-b97a-223db783bc56',
    },
    {
        appName: 'SGMentores',
        projectName: 'Mentorship Project',
        description: `The Mentors Management System digitizes the Mentors Project into a management system to keep track of the accompaniments you carry out with new students, generate the students' files and develop the final evaluation digitally. automatic, and more reliable.`,
        backgroundSmallUrl: 'https://firebasestorage.googleapis.com/v0/b/labs-63faf.appspot.com/o/mentorship.png?alt=media&token=d372fe68-c4c0-48c7-8892-b485b962c0a9',
    },
];