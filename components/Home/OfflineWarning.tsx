import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 5px;
    background-color: #1f1f1f;
`;

const Text = styled.h3`
    font-family: Courier New;
    color: orangered;
`; 

const OfflineWarning = () => {
    return (
        <Container>
            <Text>You are offline</Text>
        </Container>
    );
};

export default OfflineWarning;