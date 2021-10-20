import { useState } from "react"

import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

function Post({ id, username, userImg, img, caption }) {
    const [showMore, toggleShowMore] = useState(false)
    console.log(showMore)
    return (
      <div className="bg-white my-7 border rounded-sm">
        {/* Header */}
        <div className="flex items-center p-5">
          <img
            src={userImg}
            alt=""
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          />
          <p className="flex-1 font-bold">{username}</p>
          <DotsHorizontalIcon className="h-5 cursor-pointer" />
        </div>

        {/* Img */}
        <img src={img} alt="" className="object-cover w-full" />

        {/* Buttons */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>

        {/* Caption */}
        <div className="p-5">
          <p className={`${showMore ? "" : "truncate"}`}>
            <span className="font-bold mr-1">{username}</span>
            {caption}
          </p>
          {/* show more */}
          <p
            className="text-xs text-gray-500 cursor-pointer pt-2"
            onClick={() => toggleShowMore(!showMore)}
          >{`${showMore ? "show less" : "show more"}`}</p>
        </div>

        {/* Comments */}

        {/* Input Box */}
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-6" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button className="font-semi-bold text-blue-400">
            Post
          </button>
        </form>
      </div>
    );
}

export default Post
