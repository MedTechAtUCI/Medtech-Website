function StarkLabsDescription() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-white">
            <div className="flex flex-col md:flex-row gap-4 p-20 ">
                <img src={`${process.env.PUBLIC_URL}/the_mst_mockup.png`} alt="The MST Mockup" className="h-65 w-65 rounded-lg self-center"/>
                <div>
                    <h1 className="text-4xl font-bold mb-6">Stark Lab</h1>
                    <p className="max-w-3xl text-lg leading-relaxed">
                        Our project, Gamification of the Mnemonic Similarity Task (MST), aims to revolutionize early detection of Alzheimer’s disease by transforming a traditional laboratory memory test into an engaging digital game. The MST assesses how well individuals can distinguish between similar images—a function tied to the hippocampus, one of the first brain regions affected by Alzheimer’s. By integrating game design elements such as rewards, animations, adaptive difficulty, and a virtual guide, we seek to make the task more enjoyable and improve attention and consistency. This gamified version also collects richer behavioral data, including reaction times and gaze patterns, which will be analyzed using machine learning to identify subtle cognitive changes linked to early Alzheimer’s risk. Ultimately, our goal is to create a scalable, accessible, and scientifically rigorous digital tool that allows for engaging at-home monitoring of brain health and more reliable early detection of cognitive decline.
                    </p>
                </div>
            </div>
        </div>
    );
}

function SimonLabsDescription() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-sky-950">
           
            <div className="flex flex-col md:flex-row gap-4 p-20 ">
                <img src={`${process.env.PUBLIC_URL}/howruapp.png`} alt="Image of Brain with a Smile" className="h-60 w-65 rounded-lg self-center"/>
                <div>
                    <h1 className="text-5xl text-white font-bold">Simon Labs</h1>
                    <p className=" max-w-3xl text-2xl text-white leading-relaxed mt-6">
                    We are currently collaborating with the Simon Lab, a research group within the UCI School of Medicine led by Dr. Katherine Simon, a professor specializing in pediatric cognition, memory, and sleep. The Simon Lab focuses on understanding how memory develops in children and how sleep patterns influence learning and long-term recall. <br/><br/>
As part of our ongoing partnership, we are helping the lab develop a new memory-assessment feature called PairedAssociateTask for their app, HowRU. This feature presents children with pairs of images, where one image in the pair changes over time. Participants are asked to identify the differences, allowing researchers to measure attention, memory encoding, and recall in a natural, engaging way.


                    </p>
                </div>
                
            </div>
            
            
        </div>
    );
}

function OctopathDescription() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-white">
            <div className="flex flex-col md:flex-row gap-4 p-20 ">
                <img src={`${process.env.PUBLIC_URL}/octopath_logo.png`} alt="Octopath Logo" className="h-60 w-60 rounded-lg self-center"/>
                <div>
                    <h1 className="text-5xl font-bold">Octopath</h1>
                    <p className="max-w-3xl text-2xl leading-relaxed mt-6">
                        We are affiliated with OctoPath, the AI-driven research lab led by Dr. Jana Lipkova at UCI, through her lab’s website at Jana Research. OctoPath bridges medical science and advanced computing, applying deep learning to multimodal clinical data — including histology, radiology, genomics, and patient history — to drive more objective diagnosis, prognosis, and biomarker discovery.
                    </p>
                </div> 
            </div>
        </div>
    );
}

function UCIDCPDescription() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-sky-950">
            <div className="flex flex-col md:flex-row gap-4 p-20 ">
                <img src={`${process.env.PUBLIC_URL}/division_of_career_pathways_logo.png`} alt="UCI DCP Workshop" className="h-60 w-65 rounded-lg self-center"/>
                <div>
                    <h1 className="text-5xl text-white font-bold">UCI's Division of Career Pathways</h1>
                    <p className="max-w-3xl text-2xl text-white leading-relaxed mt-6">
                        We recently collaborated with UCI’s Division of Career Pathways (DCP) to host an interactive résumé workshop designed to support students preparing for internships and early-career opportunities. The event took place in DCP’s dedicated training room and was co-hosted with Women in Cyber Security (WiCyS), bringing together professional development resources and a supportive community focused on empowering students in technical fields.
                    </p>
                </div>
            </div>
           
        </div>
    );
}

export default function Partnerships() {
    return (
        <div className="bg-white">
            <StarkLabsDescription />
            <SimonLabsDescription />
            <OctopathDescription />
            <UCIDCPDescription />
        </div>
    );
}
