import { useState } from 'react'

function TaskAdd(){
     //We make this a 'controlled form
    const [name, setName] = useState("")

    function handleChange(event){
        setName(event.target.value)
        console.log(name)
    }

    function submit(){
        const boxes = [null, null, null, null, null, null, null]

        // Add to DB

        // Add to State

        //Dispatch to props?

    }

    return(
        <div className="grid grid-cols-12 mt-20">
        <input
            name='name'
            value={name}
            className="bg-transparent mr-2 col-span-5 focus:outline-none xl:text-2xl"
            placeholder="Add New Task..."
            onChange={handleChange}
        />
        <div className="col-span-4">
            {/* fills in the grid */}
        </div>
        <button 
            className="border-2 border-custom-primaryAccent px-2 hover:bg-custom-primaryAccent rounded-full col-span-3 xl:text-2xl"
            onClick={submit}
        >
            Create Task
        </button>
    </div>
    )
}
export default (TaskAdd) 