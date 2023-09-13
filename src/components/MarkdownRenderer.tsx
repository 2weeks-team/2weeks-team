import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const MarkDownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`;

const markdown = `
 # 헤딩

**굵게**

일반 텍스트 

`;

function MarkdownRenderer(content: string) {
    return (
        <MarkDownStyle>
            <ReactMarkdown>{content}</ReactMarkdown>
        </MarkDownStyle>
    );
}

export default MarkdownRenderer;
