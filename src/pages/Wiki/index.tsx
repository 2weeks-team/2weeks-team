import React, { useState } from 'react';
import { WikiContainer } from './style';
import SidebarWiki from '../../components/SidebarWiki';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

const Wiki: React.FC = () => {
    const [clickedValue, setClickedValue] = useState<any>(null);
    const [md, setMd] = useState<string>('# 제목');
    const handleKeyClick = (value: any) => {
        setClickedValue(value);
        setMd(clickedValue.content);
    };
    // Define an onChange handler for the MDEditor
    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setMd(value);
        }
    };
    return (
        <WikiContainer>
            <SidebarWiki onKeyClick={handleKeyClick} />
            <MDEditor
                value={md}
                onChange={handleEditorChange} // Use the handleEditorChange function
                previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                }}
                height={'100vh'}
                style={{ width: '100vw' }}
            />
            {/* <MDEditor.Markdown
                source={clickedValue?.content || ''}
                style={{ backgroundColor: 'white', width: '1000px' }}
            /> */}
        </WikiContainer>
    );
};
export default Wiki;
