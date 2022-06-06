import React, {useState} from "react";
import { useQuery } from "react-apollo";
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
    
    const { data, loading} = useQuery(QUERY_VALUE)
    const [slug, setSlug] = useState('')
     console.log('mi slug seleccionado', slug);
     
    
    return (
    loading 
    ? 
    <div>loading</div>
    : 
    <div className="flex">
        <DepartmentGroup 
            departments = {data?.categories[0].children}
            handleSetSlug = {setSlug} />
        <SearchBar 
            customSearchPageUrl ={`category/${slug}`}
            placeholder = "Que buscas?"
            displayMode = "search-and-clear-buttons"
        />
    </ div>
    )
}   

export default DepartmentSearch