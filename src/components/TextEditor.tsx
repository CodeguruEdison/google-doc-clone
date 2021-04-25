//https://www.youtube.com/watch?v=iRaelG7v0OU
import React, { useCallback, useEffect, useRef } from 'react'

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export const TextEditor = () => {
const wrapperRef =useCallback((wrapper:HTMLDivElement|null) => {
     if(!wrapper) return;
     wrapper.innerHTML =''
     const editor = document.createElement('div');
     wrapper.append(editor);
        new Quill(editor,{theme:'snow'});
    },
    [ ],
)

//    const wrapperRef =useRef<HTMLDivElement>(null);
//     useEffect(() => {
//         const editor = document.createElement('div');
//         wrapperRef.current?.append(editor);
//         new Quill(editor,{theme:'snow'});
//         //aas
//        //sds
//         return()=>{
//              if(wrapperRef.current){
//                 wrapperRef.current.innerHTML='';
//              }
//         }
//     }, [])

    return  <div className="container" ref={wrapperRef}></div>
    
}
