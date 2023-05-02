// import './PositioningPage.css';
import React from "react";
function PositioningPage() {

    function displayInfo(event) {
        event.preventDefault();


        let clickedBtn = event.target.innerText;

        console.log(clickedBtn);

        let neckBtn = document.getElementById("neck");
        let shoudldersBtn = document.getElementById("shoulders");
        let elbowsBtn = document.getElementById("elbows");
        let wristsBtn = document.getElementById("wrists");
        let fingersBtn = document.getElementById("fingers");
        let absBtn = document.getElementById("abs");
        let pelvisBtn = document.getElementById("pelvis");
        let kneesBtn = document.getElementById("knees");
        let anklesBtn = document.getElementById("ankles");

        if (clickedBtn === "Neck") {
            if (neckBtn.style.display == "none") {
                neckBtn.style.display = "block";

            } else if (neckBtn.style.display == "block") {
                neckBtn.style.display = "none";
            }
        } else {
            neckBtn.style.display = "none";
        }

        if (clickedBtn === "Shoulders") {
            if (shoudldersBtn.style.display == "none") {
                shoudldersBtn.style.display = "block";

            } else if (shoudldersBtn.style.display == "block") {
                shoudldersBtn.style.display = "none";
            }
        } else {
            shoudldersBtn.style.display = "none";
        }
        
        if (clickedBtn === "Elbows") {
            if (elbowsBtn.style.display == "none") {
                elbowsBtn.style.display = "block";

            } else if (elbowsBtn.style.display == "block") {
                elbowsBtn.style.display = "none";
            }
        } else {
            elbowsBtn.style.display = "none";
        }

        if (clickedBtn === "Wrists") {
            if (wristsBtn.style.display == "none") {
                wristsBtn.style.display = "block";

            } else if (wristsBtn.style.display == "block") {
                wristsBtn.style.display = "none";
            }
        } else {
            wristsBtn.style.display = "none";
        }

        if (clickedBtn === "Fingers") {
            if (fingersBtn.style.display == "none") {
                fingersBtn.style.display = "block";

            } else if (fingersBtn.style.display == "block") {
                fingersBtn.style.display = "none";
            }
        } else {
            fingersBtn.style.display = "none";
        }

        if (clickedBtn === "Abs") {
            if (absBtn.style.display == "none") {
                absBtn.style.display = "block";

            } else if (absBtn.style.display == "block") {
                absBtn.style.display = "none";
            }
        } else {
            absBtn.style.display = "none";
        }

        if (clickedBtn === "Pelvis") {
            if (pelvisBtn.style.display == "none") {
                pelvisBtn.style.display = "block";

            } else if (pelvisBtn.style.display == "block") {
                pelvisBtn.style.display = "none";
            }
        } else {
            pelvisBtn.style.display = "none";
        }
        
        if (clickedBtn === "Knees") {
            if (kneesBtn.style.display == "none") {
                kneesBtn.style.display = "block";

            } else if (kneesBtn.style.display == "block") {
                kneesBtn.style.display = "none";
            }
        } else {
            kneesBtn.style.display = "none";
        }

        
        if (clickedBtn === "Ankles") {
            if (anklesBtn.style.display == "none") {
                anklesBtn.style.display = "block";

            } else if (anklesBtn.style.display == "block") {
                anklesBtn.style.display = "none";
            }
        } else {
            anklesBtn.style.display = "none";
        }
           
    }



    return (

        <div>
            <section className="class section" id="positioning">


                <div className="" data-aos="fade-up" data-aos-delay="200">

                    <h2 className="text-center" data-aos="fade-up" data-aos-delay="200">Your body position says it all!</h2>

                    <div className="positioning-grid">

                        <div className="buttons-div-wrapper">
                            <ul className="buttons-ul-wrapper">
                                <li>
                                    <button onClick={displayInfo} className="positions-button">Neck</button>

                                    <p style={{ display: 'none' }} className="change" id="neck">With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>

                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Shoulders</button>
                                    <div>
                                        <p style={{ display: 'none' }} id="shoulders"  >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Elbows</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="elbows" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Wrists</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="wrists" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Fingers</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="fingers" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Pelvis</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="pelvis" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Abs</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="abs" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Knees</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="knees" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                                <li> <button onClick={displayInfo} className="positions-button">Ankles</button>
                                    <div >
                                        <p style={{ display: 'none' }} className="change" id="ankles" >With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="show-info">

                            <p className="">With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! </p>
                        </div> */}

                        <div className="positioning-img">

                        </div>
                    </div>
                </div>

            </section >


        </div >

    )
}

export default PositioningPage;