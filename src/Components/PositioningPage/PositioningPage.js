// import './PositioningPage.css';
import React from "react";
function PositioningPage() {

    // function displayInfo(event) {
    //     event.preventDefault();

        
    //     let btnText = {
    //         ankles: "Ankle text is provided",
    //         knees: "Knees text is provided",
    //         pelvis: "pelvis text is provided",
    //         neck: "neck text is provided",
    //         wrists: "wrist text is provided",
    //         fingers: "fingers text is provided",
    //         abs: "abs text is provided",
    //         elbows: "elbows text is provided",
    //         shoulders: "shoulders text is provided"
    //     };

    //     let clickedBtn = event.target.value;

    //     let info = "";

    //     if(clickedBtn.toLowerCase() === ankles) {
    //        info = btnText[clickedBtn].value; 
    //     }

    //     console.log(info);
    // }

    return (

        <div>
            <section className="class section" id="positioning">


                <div className="" data-aos="fade-up" data-aos-delay="200">

                    <h2 className="text-center" data-aos="fade-up" data-aos-delay="200">Your body position says it all!</h2>

                    <div className="positioning-grid">

                        <div className="buttons-div-wrapper">
                            <ul className="buttons-ul-wrapper">
                                <li> <button className="positions-button">Neck</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the neck position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Shoulder</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the shoulders position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Elbow</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the elbows position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Wrist</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the wrist position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Fingers</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the fingers position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Pelvis</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the pelvis position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Abs</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the abs position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Knees</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the knees position...</p>
                                    </div>
                                </li>
                                <li> <button className="positions-button">Ankles</button>
                                    <div className="change">

                                        <p color="black" >Learn more about the ankles position...</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="show-info">
                        
                            <p className="">With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                        </div>

                        <div className="positioning-img">

                        </div>
                    </div>
                </div>

            </section >


        </div >

    )
}

export default PositioningPage;