import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import Button from 'ui/components/Button'
import {
  createArticle,
  updateArticle,
  deleteArticle,
  fetchArticles,
} from '../../actions/article'

export default function ArticleComp(props) {
  const [article, setArticle] = useState(props.article || {})
  const [libele, setLibele] = useState(article.libele || '')
  const [qtemin, setQtemin] = useState(article.qtemin || '')
  const [reference, setReference] = useState(article.reference || '')
  const [type, setType] = useState((article.type && article.type.id) || '')
  const [editing, setEditing] = useState(false)
  async function update(e) {
    e.preventDefault()
    try {
      const resp = await updateArticle({
        id: article.id,
        libele,
        qtemin,
        reference,
        type,
      })
      const respo9 = await fetchArticles()
      props.setArticles(respo9.data)
    } catch (error) {
      alert('Erreur lors du modification', error.message)
    }
    setEditing(false)
  }

  async function deleteA(e) {
    e.preventDefault()
    try {
      const respo = await deleteArticle(article.id)
      const respo2 = await fetchArticles()
      props.setArticles(respo2.data)
    } catch (error) {
      alert('Erreur lors du suppression', error.message)
    }
  }

  return (
    <li className="table-row">
      <div className="col col-1" data-label="Article Id">
        {article.id}
      </div>

      <div className="col col-5" data-label="Labelle">
        {!editing ? (
          libele
        ) : (
          <input value={libele} onChange={(e) => setLibele(e.target.value)} />
        )}
      </div>
      <div className="col col-4" data-label="Type">
        {!editing ? (
          article.type && article.type.name
        ) : (
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="1">type 1</option>
            <option value="2">type 2</option>
          </select>
        )}
      </div>
      <div className="col col-7" data-label="Quantite minimale">
        {!editing ? (
          qtemin
        ) : (
          <input value={qtemin} onChange={(e) => setQtemin(e.target.value)} />
        )}
      </div>
      <div className="col col-8" data-label="Reference">
        {!editing ? (
          reference
        ) : (
          <input
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        )}
      </div>

      <div className="list-item-footer">
        <div className="col col-10">
          {!editing ? (
            <Button
              type="button"
              size="large"
              variant="secondary"
              onClick={(e) => setEditing(true)}
            >
              <NavLink to="#">Modifier</NavLink>
            </Button>
          ) : (
            <>
              <Button
                type="button"
                size="large"
                variant="secondary"
                onClick={update}
              >
                <NavLink to="#">Enregistrer</NavLink>
              </Button>
              <Button
                type="button"
                size="large"
                variant="secondary"
                onClick={(e) => setEditing(false)}
              >
                <NavLink to="#">Annuler</NavLink>
              </Button>
            </>
          )}
        </div>
        <div className="col col-11">
          <Button
            type="button"
            size="large"
            variant="secondary"
            onClick={deleteA}
          >
            <NavLink to="#">Supprimer</NavLink>
          </Button>
        </div>
      </div>
    </li>
  )
}
