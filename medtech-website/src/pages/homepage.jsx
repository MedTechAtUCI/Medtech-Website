import { Link, useNavigate } from "react-router-dom";
import CenteredComponent from "../components/CenteredComponent";
import DesignedButton from "../components/DesignedButton";

export default function Home() {
    return (
        <>
            <CenteredComponent>
                <IntroductoryBanner />
            </CenteredComponent>

            <CenteredComponent>
                <ResearchBasedGameText />
            </CenteredComponent>

            <CenteredComponent>
                <SwitchItUpBanner />
            </CenteredComponent>
        </>
    );
}

function ResearchBasedGameText(){
    return (
        <div
            className="relative w-full min-h-screen p-6 text-white bg-sky-950 flex justify-center items-center">
            
            <div className="flex flex-col lg:flex-row gap-14 p-4 lg:p-20 justify-center items-center w-full">
                <ResearchBasedDescription />
                <ResearchBasedImage />
            </div>

        </div>
    )
}

function ResearchBasedDescription(){
    return (
        <div className="w-full md:w-7/12 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-2 text-left">Research Backed Games</h2>
            <p className={"text-3xl text-left"}>
            We're developing targeted games to engage the main domains affected by Alzheimer's and Mild Cognitive Impairment (MCI). 
            Our games focus on the core cognitive skills assessed by the <strong>Mini-Mental State Examination (MMSE)</strong>, 
            which include memory, attention, language, executive function and visuospatial skills, 
            to provide an effective tool for patient engagement.
            </p>
        </div>
    )
}

function ResearchBasedImage(){
    return (
        <div>
            <div className="w-full p-6 rounded-lg ">
            
                <div className="flex items-center relative">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/compass.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Orientation</p>
                </div>


                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/card.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Registration</p>
                </div>

                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/warning.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Attention</p>
                </div>

                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/clock.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Recall</p>
                </div>

                <div className="flex items-center">
                    <img className={"w-20"} src={`${process.env.PUBLIC_URL}/icons/textbubble.png`} alt="Logo"/>
                    <p className="px-10 text-3xl font-bold">Language</p>
                </div>

            </div>
        </div>
    )
}

function SwitchItUpBanner(){
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white bg-sky-950">

            <div className="flex flex-col md:flex-row gap-4 p-20 justify-center items-center">
                {/* Column 1 */}
                <SwitchItUpImageMockUp />
                {/* Column 2 */}
                <SwitchItUpDescription />
            </div>

        </div>
    )
}

function SwitchItUpDescription(){
    return (
        <div className="w-full md:w-1/2 p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-2 text-left">Switch It Up</h2>
            <p className={"text-3xl text-left"}>
                An engaging game designed to enhance mental flexibility through rapidly changing rules.
                Players are challenged with a series of simple cognitive tasks, such as color matching,
                shape sorting, and animal counting.
            </p>
            <Link to="/projects"><p className={"text-left text-3xl text-sky-400 my-4 hover:text-sky-200"}>Learn More</p></Link>
        </div>
    )
}

function SwitchItUpImageMockUp(){
    return (
        <div className="w-full md:w-1/2  p-6 rounded-lg ">
            <img src={`${process.env.PUBLIC_URL}/switch_it_up_mockup.png`} alt="Logo"/>
        </div>
    )
}

function ClubLogoAndName(){
    return (
    <div className={"flex items-center my-8"}>
        <h1 className="text-8xl font-bold tracking-tight text-neutral-900">
            MedTech<span className="text-blue-600">@</span>UCI
        </h1>
    </div>
    ) 
    
}

function IntroductoryContent() {
    return (
        <div className="text-center space-y-6 px-4 z-10">
            {/* MedTech */}
            <h1 className="animate-fade-in-up text-6xl md:text-8xl font-extrabold tracking-tighter text-neutral-900">
                MedTech<span className="text-blue-600">@</span>UCI
            </h1>

            {/* Tagline */}
            <p className="animate-fade-in-up [animation-delay:300ms] opacity-0 text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-medium">
                Empowering Lives Through Compassionate Medical Apps. <br className="hidden md:block" />
                Dedicated to enhancing cognitive well-being and patient care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <button className="group px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:-translate-y-1">
                    Contact Us
                </button>
                <button className="px-8 py-4 rounded-xl border-2 border-neutral-100 bg-white hover:border-blue-100 hover:bg-blue-50/50 text-neutral-900 font-bold transition-all">
                    Learn More
                </button>
            </div>
        </div>
    );
}

function IntroductoryBanner() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Background Aesthetic */}
            <div className="absolute inset-0">
                
                {/* 1. INTENSE BOTTOM GRADIENT: Using a more vibrant blue with higher opacity */}
                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[240%] h-[50%] bg-gradient-to-t from-blue-400/40 via-blue-200/20 to-transparent rounded-[100%] blur-[100px]"></div>

                {/* 2. THE "CORE" GLOW: A sharper, more saturated blue at the very bottom center */}
                <div className="absolute bottom-[-5%] left-1/3 right-1/3 h-[20%] bg-blue-500/30 blur-[80px] rounded-full"></div>

                {/* 3. INTENSE GRID: Increased line opacity from 12 (0.07) to 30 (0.18) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f630_1px,transparent_1px),linear-gradient(to_bottom,#3b82f630_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* 4. OVERLAY VIGNETTE: Softens the edges of the grid so it doesn't feel like a spreadsheet */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)]"></div>

                {/* Top-left accent glow to balance the intensity */}
                <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[90px]"></div>
            </div>

            <IntroductoryContent />
        </div>
    );
}