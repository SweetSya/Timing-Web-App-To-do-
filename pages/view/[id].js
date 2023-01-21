import { useRouter } from "next/router"
import Link from "next/link"
import { collection, query, where, getDoc, getDocs, doc, setDoc, updateDoc} from "firebase/firestore";
import { db } from "../../firebase-database/firestore";
import { async } from "@firebase/util";

const detailView = ({ notes })=> {

    const router = useRouter()
    const {id} = router.query

    const back = () => {
        history.back(-1)
    }
    async function changeState() {
        const current = router.query
        let currentChange = document.querySelector('.test').textContent

        if(currentChange === 'false') {
            currentChange = 'true'
        } else {
            currentChange = 'false'
        }
        try {
            const docRef = doc(db, 'notes', current.id)
            const change = {
                done: currentChange
            }

            updateDoc(docRef, change)
                .then(docRef => {
                    alert('Document state succesfully updated!')
                    location.reload()
                })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="ml-[10px] mt-[10px] flex gap-[10px] flex-col">
            <button onClick={back} className="w-auto px-[10px] py-[3px] rounded bg-slate-400 text-stone-800 hover:opacity-90 ease-in-out">Return</button>
            {notes.map((note) => (
                <div key={note.id} className="flex flex-col bg-slate-900 rounded h-auto p-[10px] min-w-[150px] gap-[20px]">
                    <h1 className="bg-slate-700 pl-[10px] rounded">Detail of <span className="bg-slate-400 pr-[5px] py-[2px] pl-[2px] ml-[2px] rounded">{note.id}</span></h1>
                    <span className="flex flex-row justify-between w-full">
                        <span className="flex flex-col">
                            <p className="font-bold">Date :&nbsp;</p>{note.date}
                        </span>
                        <span className="flex flex-row justify-end">
                            <p className="font-bold">Level :&nbsp;</p>{note.level}
                        </span>
                    </span>
                    <span className="flex flex-col">
                    <p className="font-bold">Done :&nbsp;</p>
                        <span className="flex justify-between">
                            <p className="mt-[5px] test">{note.done}</p>
                            <button onClick={changeState} className="w-auto px-[10px] py-[3px] rounded bg-slate-400 text-stone-800 hover:opacity-90 ease-in-out">Change State</button>
                        </span>
                           
                    </span>
                    <span className="flex flex-col">
                        <p className="font-bold">Value :&nbsp;</p><p className="break-words">{note.value}</p>
                    </span>
                </div>
            ))}
        </div>
    )
}

export async function getStaticPaths() {
    let notes = []

    try {
        const querySnapshot = await getDocs(collection(db, "notes"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            notes.push({...doc.data(), id: doc.id})
        });
        console.log('data received')
    } catch(e) {
        console.log('data feth error : '+e)
    }

    const paths = notes.map((note) => ({
        params: { id: note.id },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let notes = []

    try {
        const querySnapshot = await getDoc(doc(db, 'notes', params.id));
        if(querySnapshot.exists()) {
            console.log(querySnapshot.data())
            notes.push({ ...querySnapshot.data() ,id: params.id })
        } else {
            console.log('data not exist')
        }
        
    } catch(e) {
        console.log('data feth error : '+e)
    }
    console.log(notes)
    return {
        props: {
            notes,
        },
    }
    
}
export default detailView