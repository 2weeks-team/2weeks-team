// Wiki.tsx 파일 내에서
import React, { useState, useEffect, useRef } from 'react';
import { WikiContainer } from './style';
import SidebarWiki from '../../components/SidebarWiki';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import editImg from '../../common/edit-icon/edit-icon-50.png';
import { MarkdownRenderer } from '../../components/MarkdownRenderer/MarkdownRenderer';
import { Editor } from '@toast-ui/react-editor';

interface OwnProps {
    content: string;
    title: string;
}

export async function getFSData(channelName: string, subName: string): Promise<any> {
    const docRef = doc(firestore, 'wiki', channelName);
    console.log(docRef);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data()[subName];
    } else {
        console.log('No such document!');
        return false;
    }
}

const Wiki: React.FC = () => {
    const [clickedValue, setClickedValue] = useState<any>(null); // 클릭된 값의 상태를 유지합니다.

    // 클릭된 값을 처리하는 함수
    const handleKeyClick = (value: any) => {
        setClickedValue(value);
    };

    // return (
    //     <WikiContainer>
    //         <SidebarWiki onKeyClick={handleKeyClick} /> {/* 클릭된 값의 핸들러 함수를 props로 전달합니다. */}
    //         {clickedValue && <div>{JSON.stringify(clickedValue)}</div>}
    //     </WikiContainer>
    // );
    const [data, setData] = useState<OwnProps>();
    useEffect(() => {
        async function fetchData() {
            try {
                const result: OwnProps = await getFSData('기본 정보', '과정 참여 규칙');
                setData(result);
            } catch (error) {
                // 오류 처리
                console.error('데이터 가져오기 오류:', error);
            }
        }
        fetchData();
    }, []);
    if (!data) {
        // 데이터가 로딩 중일 때 로딩 화면을 표시할 수 있습니다.
        return <div>Loading...</div>;
    }

    // function editWiki() {
    //     /*const docRef = doc(firestore, channelName, subName);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         return docSnap.data();
    //     } else {
    //         console.log('No such document!');
    //         return false;
    //     }*/
    //     <MarkdownRenderer></MarkdownRenderer>;
    //     console.log('edit has been clicked');
    // }

    const getData = () => {
        // setData();
        // # 헤딩
        // **굵게**
        //        일반 텍스트
    };

    // Get a reference to the textarea element
    //const codeTextArea = document.getElementById('code') as HTMLTextAreaElement;

    // Initialize CodeMirror
    /*const codeEditor = CodeMirror.fromTextArea(codeTextArea, {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'default',
    });*/

    // return (
    //     <WikiContainer>
    //         {/* <input>과정 참여 규칙</input> */}
    //         <p>{data.content}</p>
    //         {/* <textarea id="code"></textarea> */}
    //         <MarkdownRenderer data={data}></MarkdownRenderer>
    //         <img src={editImg} alt="Image" onClick={getData} />
    //     </WikiContainer>
    // );

    const editorRef = useRef<Editor | null>(null);

    // Toast-UI Editor 에 HTML 표시
    useEffect(() => {
        // 1. DB에서 가져온 HTML이라고 가정
        const htmlString = '<h1>h1 제목</h1> <p>p 내용</p>';

        // 2. Editor DOM 내용에 HTML 주입
        editorRef.current?.getInstance().setHTML(htmlString);
    }, []);

    return (
        <div>
            <Editor
                ref={editorRef} // useRef로 DOM 연결
                previewStyle="vertical"
                height="300px"
                initialEditType="wysiwyg"
                toolbarItems={[['bold', 'italic', 'strike']]}
            ></Editor>
        </div>
    );
};

export default Wiki;
