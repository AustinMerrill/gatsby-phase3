import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"

// import typography from './typography.module.css'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <p className="">{props.children}</p>
      }
    },
  },
}

// const serializers = {
//   types: {
//     code: props => (
//       <pre data-language={props.node.language}>
//         <code>{props.node.code}</code>
//       </pre>
//     ),
//   },
// }

// const BlockTextContainer = styled.div`
//   img {
//     width: 100%;
//     padding: 20px;
//   }
// `

const BlockText = ({ blocks }) => (
  <div>
    <BaseBlockContent
      blocks={blocks}
      //   imageOptions={{ w: 800, h: 500, fit: "max" }}
      projectId="vlbrerbr"
      dataset="production"
      serializers={serializers}
    />
  </div>
)

export default BlockText
