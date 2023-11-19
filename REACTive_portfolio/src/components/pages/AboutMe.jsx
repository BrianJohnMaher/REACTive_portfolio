import {NavLink, Container, Col, Row} from  'react-bootstrap'
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";

function About() {
    return (
        <>
            <Container>
                <article className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md mt-10">
                    <h1 className="text-2xl font-bold mt-10 mb-5">About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non provident voluptatum cumque hic temporibus mollitia nobis delectus nesciunt, vel recusandae quis odio beatae quaerat, nam doloremque, similique earum. Vel, dolorum...</p>
                </article>
                <NavLink to="/resume"><button type="button" className="my-btn text-sm mt-10 my-5 py-2 px-3 rounded">View My Resume</button></NavLink>
            </Container>
            <section className="languages flex flex-col text-center mb-4">
                <h1 className="text-2xl font-bold mt-10 mb-5">Languages & Skills</h1>
                <div className="space-x-10 sm:space-x-20 grid grid-flow-col mx-auto">
                    <div className="px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <TbBrandJavascript className='iconSize'/>
                        <FaHtml5 className='iconSize'/>
                        {/* <img className="w-14 sm:w-20 md:w-full" src={html} alt="HTML" />
                        <img className="w-14 sm:w-20 md:w-full" src={css} alt="CSS" />
                        <img className="w-14 sm:w-20 md:w-full" src={node} alt="NodeJS" />
                        <img className="w-14 sm:w-20 md:w-full" src={react} alt="React" />
                        <img className="w-14 sm:w-20 md:w-full" src={csharp} alt="C#" />
                        <img className="w-14 sm:w-20 md:w-full" src={angular} alt="Angular" /> */}
                    </div>
                    <div className="px-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {/* <img className="w-14 sm:w-20 md:w-full" src={vscode} alt="VS Code" />
                        <img className="w-14 sm:w-20 md:w-full" src={visual_studio} alt="Visual Studio" />
                        <img className="w-14 sm:w-20 md:w-full" src={tailwind} alt="Tailwind" />
                        <img className="w-14 sm:w-20 md:w-full" src={bootstrap} alt="Bootstrap" />
                        <img className="w-14 sm:w-20 md:w-full" src={mongodb} alt="mongodb" />
                        <img className="w-14 sm:w-20 md:w-full" src={graphql} alt="graphql" />
                        <img className="w-14 sm:w-20 md:w-full" src={docker} alt="Docker" />
                        <img className="w-14 sm:w-20 md:w-full" src={bash} alt="Bash" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About