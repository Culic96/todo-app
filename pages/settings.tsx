import { NextPage } from "next";
import styled from "styled-components";
import React, { useContext } from "react";
import SettingsHeader from "../components/SettingsHeader";
import SettingsBody from "../components/SettingsBody";
import { AppTheme } from "../Theme/AppTheme";
import { ThemeContext } from "./_app";
export const PageWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    backgroundColor: '#f2f2f2',
})
const Setings: NextPage = () => {

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

    return (<PageWrapper style={themeStyle}>
        <SettingsHeader style={themeStyle} />
        <SettingsBody style={themeStyle}>

        </SettingsBody>
    </PageWrapper>
    )
}

export default Setings;