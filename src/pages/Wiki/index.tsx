import React, { useEffect, useState } from 'react';
import { WikiContainer } from './style';
import SidebarWiki from '../../components/SidebarWiki';
// import { getSelectedSubChannelId } from '../../components/SidebarWiki';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { updateChannelContent } from '../../utils/firebase';

const Wiki: React.FC = () => {
    const [clickedValue, setClickedValue] = useState<any>(null);
    const [md, setMd] = useState<string>('');
    const handleKeyClick = (value: any) => {
        setClickedValue(value);
    };
    // const subChannelId = getSelectedSubChannelId();

    useEffect(() => {
        console.log(clickedValue, 'this is a clickedvalue');
        //if (clickedValue) <p>{clickedValue}</p>;
        if (clickedValue && clickedValue.content !== null && clickedValue.content !== '') {
            // Access the 'content' property
            setMd(clickedValue.content);
        } else {
            // Handle the case where 'yourObject' is null
            setMd('');
        }
    }, [clickedValue]);

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
            <button onClick={() => updateChannelContent('wiki', clickedValue, clickedValue.content)}>
                {/* {subChannelId}; */}
            </button>

            {/* <MDEditor.Markdown
                source={clickedValue?.content || ''}
                style={{ backgroundColor: 'white', width: '1000px' }}
            /> */}
        </WikiContainer>
    );
};
export default Wiki;
