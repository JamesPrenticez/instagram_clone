const todos = [
    {
        id: 0,
        task: "Wake Up/Go to Bed",
        boxes: [true, false , null, null, null, null, null],
        type: "time"
    },
    {
        id: 1,
        task: "Meditate",
        boxes: [false, false , null, null, null, null, null],
        type: "duration"
    },
    {
        id: 2,
        task: "Work on Bussiness",
        boxes: [true, true , null, null, null, null, null],
        type: "duration"
    }
]

function WinTheDay() {
    return (
      <div className="p-4 xl:mt-4 xl:ml-4">
        <div className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center font-semibold xl:text-5xl mb-4">
          <h1 className="col-span-5 !text-left">TASK</h1>
          <h1>M</h1>
          <h1>T</h1>
          <h1 className="text-blue-600 dark:text-pink-600">W</h1>
          <h1>T</h1>
          <h1>F</h1>
          <h1>S</h1>
          <h1>S</h1>
        </div>

        {todos.map((item) => (
            <div 
                key={item.id}
                className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center xl:text-2xl gap-x-1"
            >
            <p className="col-span-5 !text-left">{item.task}</p>

            {item.boxes.map((box) => (
              <div 
                key={Math.random()}
                className={`mt-2 rounded-sm ${box === true ? "bg-green-600" : box === null ? "bg-yellow-600" : !box ? "bg-red-600" : "" }`}
            >
                <p className="text-sm xl:text-2xl text-black">{JSON.stringify(box)}</p>
                
            </div>
            ))}

          </div>
        ))}
      </div>
    );
}

export default WinTheDay
