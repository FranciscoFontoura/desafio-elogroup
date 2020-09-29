import styled, { css } from 'styled-components';

export const Container = styled.div`
    background:#525252;
    border-radius:5px;
    margin-bottom: 10px;
    padding: 15px 15px 5px 15px;

    box-shadow: 0 1px 4px 0 rgba(110, 110, 110,0.8);
    border-top: 15px solid rgba(140, 140, 140,0.4);
    cursor:grab;

    p {
        font-weight:500;
        line-height: 0px;
    }

    ${props => props.isDragging && css`
        border: 2px dashed rgba(0,0,0,0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p {
            opacity: 0;
        }
    `}

`;