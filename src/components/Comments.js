
const commentData = [{
    name:"Sanjay",
    text:"This is a test comment!",
    replies:[{
        name:"Sanjay",
        text:"This is a test comment!",
        replies:[]
     },{
        name:"Sanjay",
        text:"This is a test comment!",
        replies:[]
     }]
 },
 {
    name:"Sanjay",
    text:"This is a test comment!",
    replies:[]
 },
 {
    name:"Sanjay",
    text:"This is a test comment!",
    replies:[]
 }]

const Comment = ({data}) => {
    const {name,text} = data;
    return(
        <div className="flex flex-row m-1 p-2 bg-gray-100 shadow-md">
            <img className="w-12" alt="user" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
            <div className="pl-2">
                <p className="text-lg font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({comments}) => {
    return comments.map((comment) => (
        <div>
            <Comment data={comment} />
            <div className="border border-l-black pl-4">
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))
    
}

    
const Comments = () => {
    return (
        <div>
            <CommentList comments={commentData} />
        </div>
    );
}

export default Comments;