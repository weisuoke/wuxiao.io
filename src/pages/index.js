import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout/Layout'

const IndexPage = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get("https://cnodejs.org/api/v1/topics").then(res => {
      if (res.data.success) {
        setList(res.data.data ?? [])
      }
    })
  }, [])
  return (
    <Layout pageTitle="Home Page">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export default IndexPage
