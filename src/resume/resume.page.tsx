export function Resume() {
    return (
        <div className="bg-white-resume min-h-screen">
            <header className="p-10 flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center gap-5">
                {/* name */}
                <div>
                    <h1 className="whitespace-nowrap text-xl font-bold text-black-darker">
                        Bruno Esparza
                    </h1>
                    <h2 className="whitespace-nowrap text-base font-bold text-black-lighter">
                        Frontend Developer
                    </h2>
                </div>
                {/* contact links */}
                <div className="flex flex-col items-start md:items-end gap-1">
                    <span className="text-xs font-semibold text-black-lighter">+593 99 262 0353</span>
                    <a className="underline text-xs font-semibold text-black-lighter" href="mailto:bruno.be81@gmail.com">bruno.be81@gmail.com</a>
                    <a className="underline text-xs font-semibold text-black-lighter" href="https://www.linkedin.com/in/bruno-esparza-c/">linkedin.com/in/bruno-esparza-c/</a>
                    <a className="underline text-xs font-semibold text-black-lighter" href="https://github.com/baesparza">github.com/baesparza</a>
                </div>
            </header>

            {/* divider */}
            <div className="border border-dotted border-black-lighter"></div>

            {/* content */}
            <main className="px-10 py-8 flex flex-col gap-5">
                <ResumeRow>
                    <ResumeSectionTile>
                        Summary
                    </ResumeSectionTile>
                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentParagraph>
                                Software engineer. I'm currently obtaining my degree in computer engineering at UTPL University. I'm into algorithms, full-stack development, cloud-native, and understanding technology behind the scenes.
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
                <ResumeRow>
                    <ResumeSectionTile>
                        Skills
                    </ResumeSectionTile>

                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentParagraph>
                                Web Technologies • Cloud-Native • Google Cloud Platform (GCP) • Full-Stack Development • Web Design • Team Leadership • Devops • Usability Design • Communication • Agile • Teamwork
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
                <ResumeRow>
                    <ResumeSectionTile>
                        Experience
                    </ResumeSectionTile>
                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Chief Technology Officer at Binnarium
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Feb 2021 - Present (9 months +)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                <ul>
                                    <li>- Plan projects (concept, requirements, architecture, cost, time)</li>
                                    <li>- Lead project development</li>
                                    <li>- Set up workflows and automation</li>
                                    <li>- Monitor performance</li>
                                    <li>- Estimate cost per user</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Lead Project Manager at Proyecto Ascendere, UTPL
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Apr 2017 - Apr 2021 (4 years 1 month)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                <ul>
                                    <li>- Managed Innovation Projects applied to education that needed software, therefore making projects postulations increase.</li>
                                    <li>- I worked in web applications as a Frontend Architect and made prototypes.</li>
                                    <li>- Scholarship student of projects at the Proyecto Ascendere of the UTPL</li>
                                    <li>- Give speeches to new Students and talk about Web Technology</li>
                                    <li>- Created applications with low budgets and optimized to be low price</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Web Developer for AppTec
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Aug 2019 - Jan 2020 (6 months)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                <ul>
                                    Registrate App is a biometric system where your employees can log in using their geographic location to start working, also keep count of the worked hours, vacations, and more.
                                    <li>- Design and develop a Web administration panel for Registrate App</li>
                                    <li>- Consume REST services to provide different views for administrators, managers, and employees</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
                <ResumeRow>
                    <ResumeSectionTile>
                        Languages
                    </ResumeSectionTile>

                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentParagraph>
                                <ul>
                                    <li><b>Spanish</b> (native)</li>
                                    <li><b>English</b> (advanced)</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
                <ResumeRow>
                    <ResumeSectionTile>
                        Education
                    </ResumeSectionTile>

                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Universidad Técnica Particular de Loja (UTPL)
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Engineer's degree, Computer Systems Engineering
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                2016 - 2021
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
                <ResumeRow>
                    <ResumeSectionTile>
                        Honors & Awards
                    </ResumeSectionTile>

                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                CUPAXTREME Coding Solver - IEEE UTPL
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Jun 2018
                            </ResumeSectionContentDate>
                        </ResumeSectionContentGroup>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                IEEEXTREME Coding Solver - IEEEXTREME
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Oct 2018
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                Participation in the IEEEXTREME 12 competition to solve a set of programming problems in 24 hours, supported by the IEEE branch of the UTPL.                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
                <ResumeRow>
                    <ResumeSectionTile>
                        Recent Projects
                    </ResumeSectionTile>

                    <ResumeSectionContent>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Project Lead Developer for Lab Móvil 2222
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Feb 2021 - Present (9 months +)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                Content platform + co-creation for and by teachers of primary and secondary education in Ecuador.
                                <br />
                                <br />
                                My role in the project was:
                                <ul>
                                    <li>- Guide the development of the Lab Móvil 2222</li>
                                    <li>- Created a custom dashboard to modify the content shown in the application</li>
                                    <li>- Creation of multiple services like image optimizer and video post-processing, gamification, chat moderation, and more.</li>
                                </ul>
                                <br />
                                Technologies
                                <ul>
                                    <li>- Service-oriented architecture, OOP, reactive programming, event-based</li>
                                    <li>- Stream with RxDart, and Rxjs</li>
                                    <li>- Flutter (mobile app)</li>
                                    <li>- Angular, tailwinds CSS (dashboard)</li>
                                    <li>- Firebase & GCP & Cloud Run (post-processing, chat services,serverless backend )</li>
                                    <li>- Github, GH-Project, GH-Actions (management)</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Frontend Developer for Lectulab
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Mar 2021 - May 2021 (3 months)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                Reading is the axis of all education and, therefore, one of the current concerns, so through this innovation project, we want to solve this problem. Our objective is to strengthen reading competence in children between 5 and 6 years of age to attend inclusive, comprehensive training.
                                <br />
                                <br />
                                My role in the project was:
                                <ul>
                                    <li>- Implementation of multiple web pages for the project, with registration formulary</li>
                                    <li>- Creating a micro frontend for the main lectulab game (made in unity).</li>
                                    <li>- Made the site accessible and playable on mobile devices with touch controls</li>
                                    <li>- Use a high level of CSS to make the main game, add animation, and map movement</li>
                                </ul>
                                <br />
                                Technologies used:
                                <ul>
                                    <li>- Functional programming, reactive programming, event programming</li>
                                    <li>- ReactJS Gatsby</li>
                                    <li>- Angular, native CSS</li>
                                    <li>- Iframes and web components</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                        <ResumeSectionContentGroup>
                            <ResumeSectionContentTitle>
                                Frontend Developer for Expo 360 UTPL
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Jan 2021 - Mar 2021 (3 months)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                To promote higher education and those who have a baccalaureate degree can obtain a professional degree, the Open House 'Expo UTPL 360' has been organized to publicize the degree courses it offers the institution.
                                <br />
                                <br />
                                My role in the project was:
                                <ul>
                                    <li>- Implementation of multiple web pages for the project, with registration formulary</li>
                                    <li>- Dashboard to modify the content shown in the application</li>
                                    <li>- Creation of micro frontends for the virtual tour (made in unity), with dynamic information loading, and micro frontend to access a chat to communicate with utpl information center directly</li>
                                    <li>- Creation of various services to optimize export collected information, track links opened, export data to Hubspot.</li>
                                    <li>- Extract analytics from the page, and create boards with Power BI</li>
                                </ul>
                                <br />
                                Technologies used:
                                <ul>
                                    <li>- Functional programming, reactive programming, event-based programming</li>
                                    <li>- Stream with Rxjs</li>
                                    <li>- Angular, tailwinds CSS (dashboard)</li>
                                    <li>- Firebase (serverless backend, Firestore, authentication, hosting)</li>
                                    <li>- JWT (google identity)</li>
                                    <li>- Iframes and web components</li>
                                    <li>- Github, GH-Project, GH-Actions (management)</li>
                                </ul>
                            </ResumeSectionContentParagraph>
                        </ResumeSectionContentGroup>
                    </ResumeSectionContent>
                </ResumeRow>
            </main>
        </div >

    );
}

const ResumeRow: React.FC = ({ children }) => (
    <section className="flex flex-col md:flex-row gap-2 md:gap-5">
        {children}
    </section>
);

const ResumeSectionTile: React.FC = ({ children }) => (
    <h1 className="md:w-1/5 font-bold text-sm text-black-darker -ml-2 md:ml-0">
        {children}
    </h1>
);

const ResumeSectionContent: React.FC = ({ children }) => (
    <div className="md:w-4/5">
        <div className="flex flex-col gap-4">
            {children}
        </div>
    </div>
);

const ResumeSectionContentGroup: React.FC = ({ children }) => (
    <div className="flex flex-col gap-1">
        {children}
    </div>
);

const ResumeSectionContentTitle: React.FC = ({ children }) => (
    <div className="font-medium text-sm text-black-darker">
        {children}
    </div>
);

const ResumeSectionContentParagraph: React.FC = ({ children }) => (
    <div className="font-normal text-xs text-black-lighter">
        {children}
    </div>
);

const ResumeSectionContentDate: React.FC = ({ children }) => (
    <div className="font-medium text-xs text-black-lighter">
        {children}
    </div>
);