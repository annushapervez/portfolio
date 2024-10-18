import styled from '@emotion/styled'
import { Stack } from '@chakra-ui/react'

const ProjectContainer = styled(Stack)`
  &&& {
    font-size: 18px;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    * + :not(code) {
      margin-top: 1.1rem;
    }
    li {
      margin-top: 0 !important;
    }
    blockquote {
      padding: 16px;
      color: rgba(255, 255, 255, 0.82);
      border-left: 0.25em solid;
      border-color: gray;
      background: #080808;
    }
    blockquote p {
      font-style: italic;
    }
    img {
      width: auto;
      height: auto;
      display: block;
      margin: auto;
    }
    a:hover {
      text-decoration: underline;
    }

    /* Target headers to make them smaller */
 
    h2 {
      font-size: 1.8rem; /* Adjust this value to your desired size */
    }

    h3 {
      font-size: 1.2rem; /* Adjust this value to your desired size */

    }
  
  }
`
export default ProjectContainer