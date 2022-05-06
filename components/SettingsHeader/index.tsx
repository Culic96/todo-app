import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { link } from "fs";
import Link from "next/link";
import React, { useContext } from "react";
import { ThemeContext } from "../../pages/_app";
import { AppTheme } from "../../Theme/AppTheme";
import { ArrowHolder, HeaderContainerSet } from "./style";

const SettingsHeader = (children: any) => {
    const { theme } = useContext(ThemeContext);



    const headerStyle: AppTheme = {
        dark: { backgroundColor: '#333', color: "#f2f2f2" },
        light: { backgroundColor: '#f2f2f2', color: '#333' },
        common: { transition: 'all 1s ease' }
    }

    const themeStyle = {
        ...headerStyle.common,
        ...(theme === 'light' ? headerStyle.light : headerStyle.dark)
    }
    return (
        <HeaderContainerSet style={themeStyle}>
            <ArrowHolder>
                <Link href="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ fontSize: '32px', cursor: 'pointer', }} /></Link>
            </ArrowHolder>
        </HeaderContainerSet>
    )
}

export default SettingsHeader;