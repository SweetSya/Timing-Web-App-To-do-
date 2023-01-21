import { db } from "../firebase-database/firestore"
import { collection, addDoc } from "firebase/firestore"; 

async function insertData() {
    try {
        const date = document.querySelector('#data-date')
        const level = document.querySelector('#data-level')
        const val = document.querySelector('#data-value')
        
        const docRef = await addDoc(collection(db, 'notes'), {
            date: date.value,
            level: level.options[level.selectedIndex].text,
            value: val.value,
            done: 'false'
        })
        console.log('Document written with id : ', docRef.id)
        date.value = getToday() 
        level.selectedIndex = 0
        val.value = ''
        alert('Data Succesfully Inserted!')
        
    } catch(e) {
        console.log('Error at Firestore - insertData() : '+e)
    }
}

const getToday = () => {
    return new Date().toLocaleString()
}

const Create = () => {
    return (
        <div className="flex ml-[20px] mt-[20px] flex-col gap-[5px]">
            <h1 className="text-3xl font-bold">
                Create Note
            </h1>
            <form className="flex flex-col">
                <span>
                    <p>Note Date</p>
                    <input type="text" value={getToday()} readOnly id="data-date"/>
                </span>
                <span>
                    <p>Note Level</p>
                    <select id="data-level">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </span>
                <span>
                    <p>Note Text</p>
                    <textarea type="text" rows="5" cols="40" id="data-value"/>
                </span>
            </form>
            <button onClick={insertData} className="w-[150px] bg-white rounded-[2px] text-dark mx-auto">Save</button>
        </div>
    )
}

export default Create