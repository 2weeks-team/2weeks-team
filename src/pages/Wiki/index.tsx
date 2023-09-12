import React from 'react';
import { WikiContainer } from './style';
import SidebarWiki from '../../components/SidebarWiki';

const Wiki: React.FC = () => {
    return (
        <WikiContainer>
            <SidebarWiki />
            <div>위키 내용</div>
        </WikiContainer>
    );
};

export default Wiki;
