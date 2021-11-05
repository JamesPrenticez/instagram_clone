import React from "react"
import Task from "./Task";
import TaskAdd from "./TaskAdd";

import { useRecoilValue } from 'recoil';
import { tasksState } from '../atoms/task';

const todos = [
    {
        id: 0,
        task: "Wake Up/Go to Bed",
        boxes: [true, false , false, null, null, null, null],
        type: "time"
    },
    {
        id: 1,
        task: "Exercise 30mins",
        boxes: [true, true , true, null, null, null, null],
        type: "duration"
    },
    {
        id: 2,
        task: "Work on Bussiness",
        boxes: [true, true , true, null, null, null, true],
        type: "duration"
    }
]


function WinTheDay(){
  const tasksList = useRecoilValue(tasksState)
    return (
      <div className="p-4 xl:mt-4 xl:ml-4">
        <div className="grid grid-cols-12 text-custom-textColor justify-center items-center text-center font-semibold xl:text-5xl mb-4">
          <h1 className="col-span-5 !text-left">TASK</h1>
          <h1>M</h1>
          <h1>T</h1>
          <h1 className="text-custom-primaryAccent">W</h1>
          <h1>T</h1>
          <h1>F</h1>
          <h1>S</h1>
          <h1>S</h1>
        </div>

        {/* Display Tasks */}
        {tasksList.map((item) => (
            <Task 
              key={Math.random()}
              item={item}
            />
        ))}

        {/* Add Task */}
        
          <TaskAdd />
      </div>
    );
}

export default WinTheDay

//https://www.py4u.net/discuss/313716