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

interface MarkdownProps {
    data: {
        content: string;
        title: string;
    };
}

export const MarkdownRenderer: React.FC<MarkdownProps> = ({ data }) => {
    return <MarkDownStyle>{<ReactMarkdown>{data.content}</ReactMarkdown>}</MarkDownStyle>;
};
