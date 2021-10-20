import Post from "./Post"

const posts = [
    {
        id: 123,
        username: "James",
        userImg: "/james.png",
        img: "/marcus.jpg",
        caption: "Wow I though this quote was so impacful. I have printed it out and stuck it on my bedroom wall!",
    },
    {
        id: 456,
        username: "Nat",
        userImg: "/nat.png",
        img: "/socrates.jpg",
        caption: "OMG! Bro you need to read this - sooo good if only I could remember everything we would be so smart",
    },
]
function Posts() {
    return (
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        ))}
      </div>
    );
}

export default Posts
