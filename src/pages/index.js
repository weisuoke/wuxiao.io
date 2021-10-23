import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout/Layout'

const IndexPage = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get("https://api-v1.weisuoke.com/student").then(res => {
      if (res.status === 200) {
        setList(res.data ?? [])
      }
    })
  }, [])
  return (
    <Layout pageTitle="Home Page">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {index} - {item.student_name}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export default IndexPage
