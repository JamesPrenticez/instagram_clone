function Story({ img, username}) {
    return (
      <div>
        <img
          className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transform transition duration-200 ease-out"
          src={img}
          alt=""
        />
        <p className="w-14 text-xs truncate text-center">{username}</p>
      </div>
    );
}

export default Story