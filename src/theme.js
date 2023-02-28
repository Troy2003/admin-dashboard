

export const themeSettings = (mode) => {
    return {
        palette: {
            mode,
            ...(mode === 'dark') ? {
                primary: {
                    main: '#252525',
                    light: '#f8f8f8',
                },

                secondary: {
                    main: '#ff7f50'
                },

                background: {
                    default: '#1a1a1a',
                    alt: '#000000',
                }
            } : {
                primary: {
                    main: '#007bff',
                    light: '#333333'
                },

                secondary: {
                    main: '#ff7f50'
                },

                background: {
                    default: '#f8f8f8',
                    alt: '#FFFFFF'
                }
            }
        },
        typography: {
            fontFamily: 'Montserrat , sans-serif',
            fontSize: 18,
            h1: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 48,
            },
            h2: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 36,
            },
            h3: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 24,
            },
            h4: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 20,
            },
            h5: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 18,
            },
            h6: {
                fontFamily: 'Montserrat , sans-serif',
                fontSize: 16,
            },
        },
    }
}