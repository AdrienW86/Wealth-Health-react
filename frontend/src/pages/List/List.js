import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import Pagination from '../../components/Pagination/Pagination';
import SelectPages from '../../components/SelectPages/Select';
import Table from '../../components/Table/Table';
import Searchbar from '../../components/Searchbar/Searchbar';
import {  useSelector } from 'react-redux';
import './list.css'; 

function List() {
  

  const list = useSelector((state)=> state.staff)

  console.table(list)
  const [value, setValue] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [posts, setPosts] = useState([])

useEffect(()=> {
  
      setPosts(list)
    
  },[list])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const pagesHandleChange = e => {
    setPostsPerPage(e.target.value)
  }

  return (
    <>
      <Header />
        <section className='container'>
        < Title />          
        </section>  
        <section className='searchbar_and_select-container'>
          <SelectPages
            className="select-pages" 
            pagesHandleChange={pagesHandleChange} 
          />
          <Searchbar
            classname="searchbar-list"
            setValue = {setValue} 
          />
        </section>               
        <Table 
          value = {value}
          currentPosts={currentPosts}
        />  
       <Pagination 
          currentPage = {currentPage}
          postsPerPage ={ postsPerPage}
          totalPosts ={posts.length}
          paginate = { paginate}
        />
    </>
  )
}

export default List