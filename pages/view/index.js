import { collection, doc, getDocs, orderBy, query, where} from "firebase/firestore";
import { db } from "../../firebase-database/firestore";
import React, { useEffect, useState } from "react";

const View = ({ notes, notes2, notes3, notes4}) => {
    
    function clickHandling(e) {
        const id = e.target.id
        window.location.href = window.location.href+'/'+id
    }
    function defineHeight() {
        return toString(window.innerHeight - 50)+'px'
    }
    function showMore(e) {
        if(document.querySelector('.more-active')) {
            
            if(e.target == document.querySelector('.more-active')) {
                doMoreDeactive(e.target)

                e.target.classList.remove('bg-gray-600', 'more-active', 'scale-90')
                e.target.classList.add('hover:bg-gray-600')
                return ''
            }

            const prevActive = document.querySelector('.more-active')
            doMoreDeactive(prevActive)

            prevActive.classList.remove('bg-gray-600', 'more-active', 'scale-90')
            prevActive.classList.add('hover:bg-gray-600')
        }
        
        doMoreActive(e.target)

        e.target.classList.add('bg-gray-600', 'more-active', 'scale-90')
        e.target.classList.remove('hover:bg-gray-600')

    }
    function doMoreActive(e) {
        e.closest('.notes-wrapper').classList.remove('h-[200px]')
        e.closest('.notes-wrapper').classList.add('h-full')

        e.closest('.notes-wrapper').querySelector('.notes-inner').classList.remove('overflow-y-hidden')
        e.closest('.notes-wrapper').querySelector('.notes-inner').classList.add('overflow-y-scroll')
        
    
    }
    function doMoreDeactive(e) {
        e.closest('.notes-wrapper').classList.remove('h-[full]')
        e.closest('.notes-wrapper').classList.add('h-[200px]')
        
        e.closest('.notes-wrapper').querySelector('.notes-inner').classList.remove('overflow-y-scroll')
        e.closest('.notes-wrapper').querySelector('.notes-inner').classList.add('overflow-y-hidden')
    }

    return (
        <div className="flex flex-col h-auto w-full py-[20px] px-[20px] gap-[20px] bg-cover bg-fixed bg-no-repeat bg-center overflow-y-scroll" style={{ backgroundImage : "url('../resources/images/bg.png')", backgroundBlendMode: "darken", backgroundColor: "rgba(0, 0, 0, .7)"}}>
            <div className="flex shrink-0 w-full h-[200px] overflow-hidden flex-col bg-slate-800 rounded ease-in-out transition-all duration-300 notes-wrapper">
                <span className="flex justify-between">
                    <h1 className="px-[20px] py-[20px] bg-gray-700 font-semibold">Level High ** Length : {notes3.length}</h1>
                    <p className="bg-gray-700 flex items-center px-[10px] m-[10px] rounded-[10px] hover:bg-gray-600 cursor-pointer show-more-btn ease-in-out transition-all duration-300" onClick={showMore}>Show More</p>
                </span>
                <div className="grid grid-flow-dense grid-cols-autos w-auto h-50px gap-[20px] overflow-y-hidden px-[10px] py-[10px] notes-inner">
                {notes3.map((note) => (
                    <div key={note.id} className="flex flex-col bg-slate-900 rounded h-auto p-[10px] min-w-[150px] gap-[20px]">
                        <button id={note.id} onClick={clickHandling} className="w-2/5 rounded bg-slate-400 text-stone-800 ml-auto mr-0 hover:opacity-90 ease-in-out">More Detail!</button>
                        <span className="flex flex-row justify-between w-full">
                            <span className="flex flex-col">
                                <p className="font-bold">Date :&nbsp;</p>{note.date}
                            </span>
                            <span className="flex flex-row justify-end">
                                <p className="font-bold">Level :&nbsp;</p>{note.level}
                            </span>
                        </span>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex shrink-0 w-full h-[200px] overflow-hidden flex-col bg-slate-800 rounded ease-in-out transition-all duration-300 notes-wrapper">
                <span className="flex justify-between">
                    <h1 className="px-[20px] py-[20px] bg-gray-700 font-semibold">Level Medium ** Length : {notes2.length}</h1>
                    <p className="bg-gray-700 flex items-center px-[10px] m-[10px] rounded-[10px] hover:bg-gray-600 cursor-pointer show-more-btn ease-in-out transition-all duration-300" onClick={showMore}>Show More</p>
                </span>
                <div className="grid grid-flow-dense grid-cols-autos w-auto h-50px gap-[20px] overflow-y-hidden px-[10px] py-[10px] notes-inner">
                {notes2.map((note) => (
                    <div key={note.id} className="flex flex-col bg-slate-900 rounded h-auto p-[10px] min-w-[150px] gap-[20px]">
                        <button id={note.id} onClick={clickHandling} className="w-2/5 rounded bg-slate-400 text-stone-800 ml-auto mr-0 hover:opacity-90 ease-in-out">More Detail!</button>
                        <span className="flex flex-row justify-between w-full">
                            <span className="flex flex-col">
                                <p className="font-bold">Date :&nbsp;</p>{note.date}
                            </span>
                            <span className="flex flex-row justify-end">
                                <p className="font-bold">Level :&nbsp;</p>{note.level}
                            </span>
                        </span>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex shrink-0 w-full h-[200px] overflow-hidden flex-col bg-slate-800 rounded ease-in-out transition-all duration-300 notes-wrapper">
                <span className="flex justify-between">
                    <h1 className="px-[20px] py-[20px] bg-gray-700 font-semibold">Level Low ** Length : {notes.length}</h1>
                    <p className="bg-gray-700 flex items-center px-[10px] m-[10px] rounded-[10px] hover:bg-gray-600 cursor-pointer show-more-btn ease-in-out transition-all duration-300" onClick={showMore}>Show More</p>
                </span>
                <div className="grid grid-flow-dense grid-cols-autos w-auto h-50px gap-[20px] overflow-y-hidden px-[10px] py-[10px] notes-inner">
                {notes.map((note) => (
                    <div key={note.id} className="flex flex-col bg-slate-900 rounded h-auto p-[10px] min-w-[150px] gap-[20px]">
                        <button id={note.id} onClick={clickHandling} className="w-2/5 rounded bg-slate-400 text-stone-800 ml-auto mr-0 hover:opacity-90 ease-in-out">More Detail!</button>
                        <span className="flex flex-row justify-between w-full">
                            <span className="flex flex-col">
                                <p className="font-bold">Date :&nbsp;</p>{note.date}
                            </span>
                            <span className="flex flex-row justify-end">
                                <p className="font-bold">Level :&nbsp;</p>{note.level}
                            </span>
                        </span>
                    </div>
                ))}
                </div>
            </div>
            <div className="flex shrink-0 w-full h-[200px] overflow-hidden flex-col bg-slate-800 rounded ease-in-out transition-all duration-300 notes-wrapper">
                <span className="flex justify-between">
                    <h1 className="px-[20px] py-[20px] bg-gray-700 font-semibold">Already Done ** Length : {notes4.length}</h1>
                    <p className="bg-gray-700 flex items-center px-[10px] m-[10px] rounded-[10px] hover:bg-gray-600 cursor-pointer show-more-btn ease-in-out transition-all duration-300" onClick={showMore}>Show More</p>
                </span>
                <div className="grid grid-flow-dense grid-cols-autos w-auto h-50px gap-[20px] overflow-y-hidden px-[10px] py-[10px] notes-inner">
                {notes4.map((note) => (
                    <div key={note.id} className="flex flex-col bg-slate-900 rounded h-auto p-[10px] min-w-[150px] gap-[20px]">
                        <button id={note.id} onClick={clickHandling} className="w-2/5 rounded bg-slate-400 text-stone-800 ml-auto mr-0 hover:opacity-90 ease-in-out">More Detail!</button>
                        <span className="flex flex-row justify-between w-full">
                            <span className="flex flex-col">
                                <p className="font-bold">Date :&nbsp;</p>{note.date}
                            </span>
                            <span className="flex flex-row justify-end">
                                <p className="font-bold">Level :&nbsp;</p>{note.level}
                            </span>
                            
                        </span>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
    )
}

export async function getStaticProps() {
    let notes = []
    let notes2 = []
    let notes3 = [] 
    let notes4 = []
    let querySnapshot

    try {
        querySnapshot = await getDocs(query(collection(db, "notes"), where('level', '==', 'Low'), where('done', '==', 'false')));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            notes.push({...doc.data(), id: doc.id})
        });
        console.log('data received')
        
        querySnapshot = await getDocs(query(collection(db, "notes"), where('level', '==', 'Medium'), where('done', '==', 'false')));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            notes2.push({...doc.data(), id: doc.id})
        });
        console.log('data received')
        querySnapshot = await getDocs(query(collection(db, "notes"), where('level', '==', 'High'), where('done', '==', 'false')));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            notes3.push({...doc.data(), id: doc.id})
        });
        console.log('data received')
        querySnapshot = await getDocs(query(collection(db, "notes"), where('done', '==', 'true')));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            notes4.push({...doc.data(), id: doc.id})
        });
        console.log('data received')
    } catch(e) {
        console.log('data feth error : '+e)
    }

    return {
        props: {
            notes,
            notes2,
            notes3,
            notes4,
        },
    }
    
}

export default View