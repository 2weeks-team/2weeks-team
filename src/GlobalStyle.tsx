import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

type Theme = {
    backgroundColor: string;
    cellBackground: string;
};

type ThemeName = 'theme1' | 'theme2' | 'theme3';

const themes: Record<ThemeName, Theme> = {
    theme1: {
        backgroundColor: '#FF5733',
        cellBackground: '#3F0E40', // Add the cell background color for theme1
    },
    theme2: {
        backgroundColor: '#33FF57',
        cellBackground: '#4D2A51', // Add the cell background color for theme2
    },
    theme3: {
        backgroundColor: '#5733FF',
        cellBackground: '#2BAC76', // Add the cell background color for theme3
    },
    // Add more themes as needed
};

const GlobalStyle = createGlobalStyle`
  :root {
    --navigation-background : #350d36;
    --cell-background: ${(props) => props.theme.cellBackground}; // Use theme-specific cell background
    --active-item: #1164A3;
    --active-item-text: #FFFFFF;
    --point-item: #4D2A51;
    --text: #FFF;
    --active-current-status: #2BAC76;
    --mention-badge: #ECE7EC;
    --navigation-background: #350D36;
    --navigation-text: #FFF;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    font-size: 16px;
    line-height: 1.5;
    width: 100vw;
    height: 100vh;
  }

  a {
    text-decoration: none;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

const App = () => {
    const [theme, setTheme] = useState<ThemeName>('theme1'); // Initial theme

    const changeThemeColor = () => {
        // Logic to change the theme color when the button is clicked
        if (theme === 'theme1') {
            setTheme('theme2');
        } else if (theme === 'theme2') {
            setTheme('theme3');
        } else {
            setTheme('theme1');
        }
    };

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Optional: Set a height to center vertically within the viewport
    };

    const buttonStyles = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        placeItems: 'center',
    };

    return (
        <ThemeProvider theme={themes[theme]}>
            <div>
                <div style={containerStyles}>
                    <button style={buttonStyles} onClick={changeThemeColor}>
                        Change Theme Color
                    </button>
                </div>
                <GlobalStyle />
                {/* Rest of your application */}
            </div>
        </ThemeProvider>
    );
};

export default App;
