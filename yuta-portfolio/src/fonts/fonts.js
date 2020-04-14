import { createGlobalStyle } from 'styled-components';

import timeline-text from './timeline-text.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${timeline-textWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;