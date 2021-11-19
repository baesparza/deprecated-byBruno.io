import { MetaComponents } from "../../components/meta.component";
import { allSocialLinks, SocialLink } from "../../data/social-links.data";
export function Resume() {
    return (<>
        <MetaComponents title="Resume" description="Bruno Esparza resume with relevant information about experience, education, projects, language and awards"></MetaComponents>

        <div className="relative bg-[#F7FBFE] min-h-screen">
            {/* style bubbles */}
            <div className="delay-150  duration-1000 animate-pulse absolute z-10 -top-4 -left-4 w-32 h-32 bg-[#b5b3e7] rounded-full blur-2xl"></div>
            <div className="delay-500 duration-1000 animate-pulse absolute z-10 top-4 left-20 w-32 h-32 bg-[#f7e4b0] rounded-full blur-2xl"></div>
            <div className="duration-1000 animate-pulse absolute z-10 top-8 left-4 w-32 h-32 bg-[#f3acb2] rounded-full blur-2xl"></div>

            {/* header with name and contact */}
            <header className="relative z-20 p-10 flex flex-col justify-start items-start sm:flex-row sm:justify-between sm:items-center gap-5 print:flex-row print:justify-between print:items-center">
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
                <div className="flex flex-col items-start sm:items-end gap-1 print:items-end">
                    {
                        allSocialLinks.map((l, i) => <ContactLink link={l} key={i} />)
                    }
                </div>
            </header>

            {/* divider */}
            <div className="relative z-20 border border-dotted border-black-lighter"></div>

            {/* content */}
            <main className="relative z-20 px-10 py-8 flex flex-col gap-5">
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
                                Javascript • Typescript • Angular • React • VueJS • Tailwind Css • SASS • NodeJS • Web Technologies • Containers • Google Cloud Platform (GCP) • Dart • Flutter • Cloud-Native • Full-Stack Development • Web Design • Python • Java • CI/CD • Devops • Team Leadership • Figma • Usability Design • Communication • Agile • Teamwork
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
                                Front End Developer & Project Lead at Binnarium
                            </ResumeSectionContentTitle>
                            <ResumeSectionContentDate>
                                Feb 2021 - Present (9 months +)
                            </ResumeSectionContentDate>
                            <ResumeSectionContentParagraph>
                                <ul>
                                    <li>- Plan Projects (concept, requirements, architecture, cost, time)</li>
                                    <li>- Lead project development (Lab Móvil 2222)</li>
                                    <li>- Set up automated workflows </li>
                                    <li>- Monitor performance of applications</li>
                                    <li>- Estimate the cost of maintaining the applications</li>
                                    <li>- Optimize applications for low cost</li>
                                    <li>- Frontend Developer (Lectulab, Lab Móvil 2222, Tour Virtual UTPL, other)</li>
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
                                Content platform + co-creation for and by teachers of primary and secondary education in Ecuador. The platform is available to host 2000 students with video on demand, access to books, chats. Integrated services like PubPub, Clubhouse,  MeiliSearch, Video On Demand API. The platform is available in Android and IOS stores.
                                <br />
                                <br />
                                My role in the project was:
                                <ul>
                                    <li>- Guide the development of the Lab Móvil 2222</li>
                                    <li>- Created a custom dashboard to modify the content shown in the application</li>
                                    <li>- Creation of multiple services like image optimizer and video post-processing, gamification, chat moderation, and more.</li>
                                    <li>- Active participation in the development of the mobile application with flutter.</li>
                                </ul>
                                <br />
                                Technologies
                                <ul>
                                    <li>- Service-oriented architecture, OOP, reactive programming, event-based</li>
                                    <li>- Stream with RxDart, and Rxjs</li>
                                    <li>- Flutter (mobile app)</li>
                                    <li>- Angular, tailwinds CSS (dashboard)</li>
                                    <li>- Firebase & GCP & Cloud Functions & Cloud Run (post-processing, chat services,serverless backend )</li>
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
    </>);
}

const ContactLink: React.FC<{ link: SocialLink }> = ({ link }) => (
    <div className='flex flex-row-reverse sm:flex-row print:flex-row gap-2 text-black-lighter'>
        <a target="_blank" rel="noopener noreferrer" className="underline text-xs font-semibold " href={link.redirect}>
            {link.textUrl}
        </a>
        <link.icon className="h-4 " title={link.title} ></link.icon>
    </div>
);
const ResumeRow: React.FC = ({ children }) => (
    <section className="content-group flex flex-col sm:flex-row gap-2 sm:gap-5 print:gap-5 print:flex-row">
        {children}
    </section>
);

const ResumeSectionTile: React.FC = ({ children }) => (
    <h1 className="sm:w-1/5 font-bold text-sm text-black-darker -ml-2 sm:ml-0 print:w-1/5 print:ml-0">
        {children}
    </h1>
);

const ResumeSectionContent: React.FC = ({ children }) => (
    <div className="sm:w-4/5 print:w-4/5 page" >
        <div className="flex flex-col gap-4">
            {children}
        </div>
    </div>
);

const ResumeSectionContentGroup: React.FC = ({ children }) => (
    <div className="flex flex-col ">
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
