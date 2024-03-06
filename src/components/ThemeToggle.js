import React from 'react';
import styled from 'styled-components';
import "./mainPage/css/ThemeToggle.css";

import {FaMoon, FaSun} from 'react-icons/fa';

const SunIcon = styled(FaSun)`
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
`;

const MoonIcon = styled(FaMoon)`
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
`;

const ToggleContainer = styled.button`
    background: var(--color-text-secondary);
    border: 2px solid ${({theme}) => theme.toggleBorder};
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    margin: 0 auto;
    overflow: hidden;
    padding: 8px;
    position: relative;
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <ToggleContainer onClick={toggleTheme}>
            <SunIcon className={"SunIcon"} style={{color: theme === 'light' ? '#FFA500' : '#D3D3D3'}} />
            <MoonIcon className={"MoonIcon"} style={{color: theme === 'dark' ? '#FFA500' : '#D3D3D3'}} />
        </ToggleContainer>
    );
};

export default Toggle;