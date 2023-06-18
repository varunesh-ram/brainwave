import React, {useEffect, useState} from 'react';
import './App.css';
import {ReactComponent as Bulb} from './bulb.svg';
import useMountTransition from "./useMountTransition";
import DetailsPageWithMenu from "./DetailsPageWithMenu";

function App() {
    const [borderStyle, setBorderStyle] = useState("button-dashed");
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    const [isAgendaPage, setIsAgendaPage] = useState(false);
    const [isTeamsPage, setIsTeamsPage] = useState(false);

    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(isMounted, 200);

    useEffect(() => {
        setTimeout(() => {
            setBorderStyle(borderStyle === "button-dashed" ? "button-solid" : "button-dashed");
        }, 300)
    }, [borderStyle])

    useEffect(() => {
        if (isLoadingPage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
    }, [isLoadingPage]);
    return (
        <div
            style={{
                background: 'linear-gradient(90deg, rgba(51,181,57,1) 0%, rgba(19,97,22,1) 65%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isLoadingPage && (hasTransitionedIn || isMounted) &&
                <div className={`title ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
                    <div className={`bulb_container ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}><Bulb/>
                    </div>
                    <div className={`title_container ${hasTransitionedIn && 'in'} ${isMounted && 'visible'}`}>
                        <div className="title_text">
                            brai <a className={borderStyle} style={{color: "gold", zIndex: "999"}} onClick={(e) => {
                            e.preventDefault();
                            console.log("clicked");
                            setIsLoadingPage(false);
                            setIsAgendaPage(true);
                        }}>NW</a> ave 3.0
                        </div>
                        <div className="left_subtext">
                            Transforming IDEAs into REALity
                        </div>
                    </div>
                </div>}
            {(isAgendaPage || isTeamsPage) &&
                <div>
                    <DetailsPageWithMenu isAgendaPage={isAgendaPage} setIsAgendaPage={setIsAgendaPage} isTeamsPage={isTeamsPage} setIsTeamsPage={setIsTeamsPage}/>
                </div>}

            {/*<div className="clouds">
                <img src={cloud1} alt="" className="clouds_one"></img>
                <img src={cloud2} alt="" className="clouds_two"></img>
                <img src={cloud3} alt="" className="clouds_three"></img>
                <img src={cloud4} alt="" className="clouds_four"></img>
                <img src={cloud5} alt="" className="clouds_five"></img>
            </div>*/}
        </div>
    );
}

export default App;
