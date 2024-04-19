import React from "react";
import Comment from "./Comment";

const comments =[
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다."
  },
  {
    name: "유재석",
    comment: "안녕하세요, 소플입니다.2"
  },{
    name: "유재석3",
    comment: "안녕하세요, 소플입니다.4"
  },
];

// function CommentList(props) {
//   return (
//       <div>
//         <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."}/>
//         <Comment name={"유재석"} comment={"리엑트 재밌어요"}/>
//       </div>
//   )
// }

function CommentList(props) {
  return (
      <div>
        {comments.map((comment) => {
          return (
              <Comment name={comment.name} comment={comment.comment}/>
          );
        })}
      </div>
  )
}

export default CommentList;