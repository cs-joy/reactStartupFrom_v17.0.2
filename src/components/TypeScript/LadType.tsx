import React from 'react';
import { ThemeProvider, Box, Text } from '@lapidist/components';

class LadType extends React.Component {
    public render() {
        return (
            <div>
                <ThemeProvider>
                    <Box
                        styles={{
                            padding: '40px',
                            boxShadow: '0 0 10px rgba(0, 255, 0, 0.9)',
                            backgroundColor: { group: 'primary', shade: 'base' }
                        }}
                    >
                        <Text
                            styles={{
                                textColor: { group: 'base', shade: 'light' }
                            }}
                        >
                            LadTypescript
                        </Text>
                    </Box>
                </ThemeProvider>
            </div>
        )
    }
}

export default LadType
