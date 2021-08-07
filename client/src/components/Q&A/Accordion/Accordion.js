import styled from 'styled-components';

const Span = styled.span`
    text-decoration: underline;
    margin: 2%;
`;

const Pipe = styled.span`
    margin-left: 2%;
    margin-right: 3%;
`;

const Li = styled.li`
    display: flex;
    flex-flow: column;
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
    max-width: 30%;
    margin: 1%;
`;

const Ques = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const QuesSection = styled.ul`
    display: flex;
    flex-flow: column;
`;

const S = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 3%;
    margin-left: 2%;
`;

const Aside = styled.aside`
    display: flex;
    align-items: center;
    width: 22%;
`;

const Ans =  styled.div`
    // height: 250px;
    // overflow: auto;
`;

export { QuesSection, S, Ans, Ques, Pd, AnwrSection, Aside, Li, Pipe, Span };
