import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Container from 'ui/components/Container'
import Button from 'ui/components/Button'
import SEO from 'ui/components/SEO'
import ArticleComp from './articleComp'

import { createArticle, fetchArticles } from '../../actions/article'
import NewArticle from './NewArticle'

export default function Article() {
  const [articles, setArticles] = useState([])
  const [newArticle] = useState({})
  useEffect(() => {
    async function fetchArticle() {
      try {
        const data = await axios.get(`/article/findAll`)
        setArticles(data.data)
      } catch (error) {
        alert(error.message)
      }
    }
    fetchArticle()
    console.log(articles)
  }, [])
  async function create(e) {
    e.preventDefault()
    try {
      const respo = await createArticle(newArticle)
      const respo1 = fetchArticles()
      setArticles(respo1.data)
    } catch (error) {
      alert('Error while creating user', error.message)
    }
  }
  return (
    <Container>
      <SEO url="/" title="Article" />
      <div class="container">
        <div className="header">
          <h2>Article</h2>
          <Button
            onClick={(e) =>
              (document.getElementById('myModal3').style.display = 'block')
            }
          >
            {<NavLink to="#">Creer un Article</NavLink>}
          </Button>
          <div id="myModal3" className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={(e) =>
                  (document.getElementById('myModal3').style.display = 'none')
                }
              >
                &times;
              </span>
              <NewArticle setArticles={setArticles} />
            </div>
          </div>
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Article Id</div>
            <div className="col col-2">Labelle</div>
            <div className="col col-3">Quantite minimale</div>
            <div className="col col-4">Reference</div>
            <div className="col col-5">Type</div>
          </li>

          {articles &&
            articles.map((article, index) => {
              return (
                <ArticleComp
                  article={article}
                  key={index}
                  setArticles={setArticles}
                />
              )
            })}
        </ul>
      </div>
    </Container>
  )
}
