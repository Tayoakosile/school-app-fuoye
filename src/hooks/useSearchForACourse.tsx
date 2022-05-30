import React from 'react'
import { useState, useEffect } from 'react';
import { fileCategory } from '../lib/util/util';

const useSearchForACourse = () => {
    const [input, setInput] = useState('')
    const [array, setArray] = useState<any>()


    useEffect(() => {
        setArray(fileCategory)
    }, [fileCategory])

    const handleChange = (e: any) => {

        let typedWord = e.target.value.trim().toLowerCase()

        if (typedWord.length >= 1) {
            const findWord = array.map((list: any) => {
                if (list.courseFileName.toLowerCase().includes(typedWord) || list.courseFileName.toLowerCase() == typedWord) {
                    return list;
                }
                else {
                    return;
                }
            }).filter((w: any) => w != undefined)

            setArray(findWord)

            // console.log(findWord, typedWord, 'findWord')
        }
        else {
            setArray(fileCategory)

        }
    }
    return { input, handleChange, array }
}

export default useSearchForACourse