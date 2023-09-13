//npms
import React from "react";
//Styles
import { SocialButtonsStyle, SocialButtonStyle } from "./SocialButtons.styled"
//Components
import { FaWhatsapp, FaVk, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const SocialButtons = () => {
    return(
        <SocialButtonsStyle>
            <SocialButtonStyle href="/">
                <FaWhatsapp/>
            </SocialButtonStyle>
            <SocialButtonStyle href="/">
                <FaVk/>
            </SocialButtonStyle>
            <SocialButtonStyle href="/">
                <FaTelegramPlane/>
            </SocialButtonStyle>
            <SocialButtonStyle href="/">
                <FaYoutube/>
            </SocialButtonStyle>
        </SocialButtonsStyle>
    )
};

export default SocialButtons;