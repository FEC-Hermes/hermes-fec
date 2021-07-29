import React, { useState ,useEffect } from 'react';
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

const Pd = styled.div`
    display: flex;
    flex: 1;
    max-width: 30%
`;

const AccordionSection = styled.div`

`;

const Container = styled.div`

`;

const Accordion = ({data, openModal}) => {
  return (
    <AccordionSection>
      <Container>
        {data.results.map(ques => {
          return (
            <Aside key={ques.question_id}>
              <Pd>Q: {ques.question_body}</Pd>

              <Pd>Helpful?
                <Span>
                  {`Yes (${ques.question_helpfulness})   `}
                </Span>
                <Pipe>|</Pipe>
                <div onClick={openModal}>
                  Add Answer
                </div>
              </Pd>
            </Aside>
          );
        })}
      </Container>
    </AccordionSection>
  );
};

export default Accordion;