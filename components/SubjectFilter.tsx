"use client";
import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useRouter } from 'next/navigation'; // Changed from 'next/router'
import { useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';

// Add your subjects array here or import it
const subjects = ['math', 'science', 'history', 'english' , 'coding']; // Example subjects

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';

    const [subject, setSubject] = useState(query);
    
    useEffect(() => {
        let newUrl = "";
        if(subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject
            })
        }
        router.push(newUrl, { scroll: false })
    }, [subject, searchParams, router]) 

    return (
        <Select value={subject} onValueChange={setSubject}> 
            <SelectTrigger className='input capitalize'>
                <SelectValue placeholder="Subject"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='all'>All Subjects</SelectItem>
                {subjects.map((subject) => ( 
                    <SelectItem key={subject} value={subject} className='capitalize'>
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SubjectFilter