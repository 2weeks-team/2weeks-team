import React from 'react';
import { GalleryContainer } from './style';
import SidebarGallery from '../../components/SidebarGallery';

const Gallery: React.FC = () => {
    return (
        <GalleryContainer>
            <SidebarGallery />
            Gallery
        </GalleryContainer>
    );
};

export default Gallery;
