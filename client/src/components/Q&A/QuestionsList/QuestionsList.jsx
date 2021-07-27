import React from 'react';
import styled from 'styled-components';

const QuesSection = styled.section`
    display: flex;
`;

const AnwrSection = styled.section`
    display: flex;
    flex-flow: column;
`;

const P = styled.p`

`;

const Aside = styled.aside`
    margin-left: 61%;
`;

const QuestionsList = () => {
    return (
        <div>
            <ul>
                <li>
                    <main>

                        <QuesSection>
                            <P>Q: kkkkkkkkkkdkfdjfdjfdjfdjfdjfj?</P>
                            <Aside>
                                <p>Helpful?
                                    <span>
                                        Yes (25)
                                    </span>
                                    {' | '}
                                    <span>
                                        Add Answer
                                    </span>
                                </p>
                                <p></p>
                            </Aside>
                        </QuesSection>

                        <AnwrSection>
                            <p>A: nnnbbbbxssssssssssssssssssssss?</p>
                            <p>user info | Helpful | Report</p>
                        </AnwrSection>
                    </main>
                </li>
            </ul>
        </div>
    );
};

export default QuestionsList;