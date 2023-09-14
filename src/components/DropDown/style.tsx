import styled from 'styled-components';

export const DropdownMenu = styled.ul`
    background: #fff;
    border-radius: 8px;
    position: absolute;
    top: 30px;
    right: 0;
    width: 150px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition:
        opacity 0.4s ease,
        transform 0.4s ease,
        visibility 0.4s;
    padding: 10px;

    &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

export const DropdownContainer = styled.div``;
