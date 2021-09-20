import * as React from 'react';
import { Link } from "gatsby";
// @ts-ignore
import SPHLogo from '../images/sph-logo.png';
import SPHNavBar from "./SPHNavBar"

const SPHHeader = () => {
    return (
        <header className="sph-header">
            <div className="sph-header__wrap">
                <Link to="/">
                    <div className="sph-header__mast">
                        <img className="sph-header__logo" src={SPHLogo} alt="SPH Logo" />
                        <h1 className="sph-header__text">SurPath Hub</h1>
                    </div>
                </Link>
                <div className="sph-header__actions">
                    <SPHNavBar />
                </div>
            </div>
        </header>
    );
};

export default SPHHeader;