/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
export default function Button({ text, click }) {
    return <button css={css`
        border-radius : 4px;
        border : none;
        padding : 1rem
    `}
        onClick={click}
    >{text}</button>
}