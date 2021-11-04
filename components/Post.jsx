import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { db } from "../firebase"
import { 
    addDoc,
    doc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    deleteDoc
} from "@firebase/firestore"
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import Moment from 'react-moment';

function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [showMore, toggleShowMore] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    //Comments from Firebase
    useEffect(() =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
          ),
          (snapshot) => 
            setComments(
              snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
            )
        ),
      [db, id]
    );
    
    //Likes from Firebase useEffect is listening in
    useEffect(
      () =>
        onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
          setLikes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      [db, id]
    );

    //Has Liked?
    useEffect(() => {
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      );
    }, [likes]);

    
    const sendComment = async (e) => {
      e.preventDefault();
      
      const commentToSend = comment;
      setComment('')
      
      await addDoc(collection(db, "posts", id, "comments"), {
        comment: commentToSend,
        username: session.user?.username,
        userImage: session.user?.image,
        timestamp: serverTimestamp(),
      });
    };
    
    const likePost = async () => {
      if (hasLiked){
        await deleteDoc(doc(db, "posts", id, "likes", session.user?.uid))       
      } else {
        await setDoc(doc(db, "posts", id, "likes", session.user?.uid), {
          username: session.user.username,
        });
      }
    };
    
    return (
      <div className="bg-custom-background my-7 border border-custom-tertiaryAccent rounded-sm">
        {/* Header */}
        <div className="flex items-center p-5">
          <img
            src={userImg}
            alt=""
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          />
          <p className="flex-1 font-bold text-custom-textColor">{username}</p>
          <DotsHorizontalIcon className="h-5 cursor-pointer text-custom-textColor" />
        </div>

        {/* Img */}
        <img src={img} alt="" className="object-cover w-full" />

        {/* Buttons */}
        {session && (
          <div className="flex justify-between px-4 pt-4">
            <div className="flex space-x-4">

              {hasLiked ? (
                <HeartIconFilled onClick={likePost} className="btn text-red-500" />              
                ) : (
                <HeartIcon onClick={likePost} className="btn" />
              )}

              <ChatIcon className="btn" />
              <PaperAirplaneIcon className="btn" />
            </div>
            <BookmarkIcon className="btn" />
          </div>
        )}

        {/* Caption */}
        <div className="p-5">
          <p className={`${showMore ? "" : "truncate"}`}>
            <span className="font-bold mr-2 text-custom-textColor">
              {username}
            </span>
            <span className="text-custom-textColor">{caption}</span>
          </p>
          {/* show more */}
          <p
            className="text-xs text-gray-500 cursor-pointer pt-2"
            onClick={() => toggleShowMore(!showMore)}
          >{`${showMore ? "show less" : "show more"}`}</p>
        </div>
        
        {/* {console.log(comments)} */}
        {/* Comments */}
        {comments.length > 0 && (
          <div className='ml-5 h-20 overflow-y-scroll scrollbar-thumb-custom-secondary scrollbar-thin'>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className='flex items-center truncate mb-3 space-x-2'
              >
                <img 
                  src={comment.userImage}
                  alt="Commented User Image"
                  className="h-7 rounded-full"
                />
                <p className="text-sm flex-1"><span className="font-semibold mr-2">{comment.username}</span>{comment.comment}</p>

                <Moment fromNow className="pr-5 text-xs text-gray-500">{comment.timestamp?.toDate()}</Moment>
              </div>
            ))}
          </div>
        )}

        {/* Input Box */}
        {session && (
          <form className="flex items-center pb-4 pl-4 pr-4 ">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 focus:ring-0 outline-none m-2 bg-transparent border-none"
            />
            <EmojiHappyIcon className="h-6 pr-2 text-custom-secondary hover:cursor-pointer"/>
            <button
              type="submit"
              disabled={!comment.trim()}
              onClick={sendComment}
              className="font-semi-bold py-1 px-4 rounded-lg bg-custom-primaryAccent text-custom-secondary"
            >
              Post
            </button>
          </form>
        )}
      </div>
    );
}

export default Post
