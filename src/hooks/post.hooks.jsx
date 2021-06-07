import React from 'react'
import { useMutation, useQuery, useQueryClient } from "react-query"
import { getDummy, deleteDummy, addDummy } from "@api/dummy";


export default function usePost() {
    const client = useQueryClient()
    const get = useQuery('post', () => getDummy())
    
    const remove = useMutation(id => deleteDummy(id), {
        onSuccess() {
            client.invalidateQueries('post')
        }
    })

    const add = useMutation(data => addDummy(data), {
        onSuccess() {
            client.invalidateQueries('post')
        }
    })

    const update = useMutation(data => updateDummy(data), {
        onSuccess() {
            client.invalidateQueries('post')
        }
    })

    return {
        get, remove, update, add
    }
}
