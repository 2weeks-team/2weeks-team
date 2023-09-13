import React, { useEffect, useState } from 'react';
import { WikiContainer } from './style';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../utils/firebase';
import editImg from '../../common/edit-icon/edit-icon-50.png';
import MarkdownRenderer from '../../components/MarkdownRenderer';

export async function getFSData(channelName: string, subName: string): Promise<any> {
    const docRef = doc(firestore, 'wiki', channelName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()[subName];
    } else {
        console.log('No such document!');
        return false;
    }
}

const Wiki: React.FC = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getFSData('기본 정보', '과정 참여 규칙');
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

    function editWiki(content: string) {
        /*const docRef = doc(firestore, channelName, subName);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log('No such document!');
            return false;
        }*/
        <MarkdownRenderer content={content}></MarkdownRenderer>;
        console.log('edit has been clicked');
    }

    return (
        <WikiContainer>
            <h2>과정 참여 규칙</h2>
            <p>{data.content}</p>
            <img src={editImg} alt="Image" onClick={editWiki('# 테스트입니당')} />
        </WikiContainer>
    );
};

export default Wiki;
