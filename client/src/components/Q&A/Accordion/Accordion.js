import styled from 'styled-components';

const Span = styled.span`
    text-decoration: underline;
`;

const Pipe = styled.span`
    margin-left: 1%;
    margin-right: 1%;
`;

const Aside = styled.aside`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const AnwrSection = styled.section`
    display: flex;
    flex-flow: column;
`;


const Pd = styled.div`
    display: flex;
    flex: 1;
    max-width: 30%
`;

const AccordionSection = styled.div`

`;

const QuesSection = styled.section`
    display: flex;
    flex-flow: column;
`;

export { QuesSection, AccordionSection, Pd, AnwrSection, Aside, Pipe, Span };