function SwitchItUp() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-sky-950">
           
            <div className="flex flex-col md:flex-row gap-4 p-20">
                <img src={`${process.env.PUBLIC_URL}/SwitchItUp.png`} alt="SwitchItUp Mockup" className="h-96 w-30 rounded-lg "/>
                <div>
                    <h1 className="text-5xl text-white font-bold">SwitchItUp</h1>
                    <p className=" max-w-3xl text-2xl text-white leading-relaxed mt-6">
                        An engaging game designed to enhance mental flexibility through rapidly changing rules.
                        Players are challenged with a series of simple cognitive tasks, such as color matching,
                        shape sorting, and animal counting. This game tracks performance metrics such as reaction time and accurary to provide insights into cognitive agility improvements over time. 
                    </p>
                </div>
                
            </div>
            
            
        </div>
    );
}

function Alois() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-sky-700">
            <div className="flex flex-col md:flex-row gap-4 p-20">
                <img src={`${process.env.PUBLIC_URL}/alois_mockup.png`} alt="Alois Logo" className="h-60 w-65 rounded-lg self-center"/>
                <div>
                    <h1 className="text-5xl text-white font-bold">The MST Game</h1>
                    <p className="max-w-3xl text-2xl leading-relaxed mt-6 text-white">
                    A Calit2 study and project with over $2000 of funding. Pariticipants are provided with images and must determine if they have seen the image before. A study (with prizes!) will be conducted to examine results. Currently in development!  
                </p>
                </div>
                
            </div>
           
        </div>
    );
}

function Simon() {
    return (
        <div className="flex flex-col items-center text-center h-screen my-16 justify-center px-8 bg-white">
            <h1 className="text-4xl font-bold">Paired Assosiate Task</h1>
            <p className="max-w-3xl text-lg leading-relaxed mt-6">
                Testing cognitive abilities through determining differences between a pair of images. This project is in colloboration with Simon's Lab and is currently in development.
            </p>
        </div>
    )
}

export default function Projects() {
    return (
        <div className="bg-white">
            <SwitchItUp/>
            <Alois/>
            <Simon/>
        </div>
    );
}