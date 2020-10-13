import React, { useState } from 'react'
import InputField from 'ui/components/InputField'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import {
  Title,
  CardWrapper,
  Center,
} from 'features/dashboard/components/shared-style'
import {
  createArticle,
  fetchArticles,
} from 'features/dashboard/actions/article'
export default (props) => {
  const [libele, setLibele] = useState('')
  const [qtemin, setQtemin] = useState('')
  const [reference, setReference] = useState('')
  const [type, setType] = useState('')

  const create = async (e) => {
    e.preventDefault()
    try {
      const resp = await createArticle({
        libele,
        qtemin,
        reference,
        type,
      })
      console.log(resp)
      const respo = await fetchArticles()
      props.setArticles(respo.data)
      document.getElementById('myModal3').style.display = 'none'
    } catch (err) {
      alert('Erreur lors du creation', err.message)
    }
  }
  return (
    <>
      <Title>Creer Un nouveau Article</Title>
      <CardWrapper as={Card}>
        <InputField label="Labelle">
          <input
            type="text"
            name="mail"
            placeholder="Labelle"
            onChange={(e) => setLibele(e.target.value)}
            value={libele}
          />
        </InputField>

        <InputField
          label="Type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <select>
            <option value="1">type 1</option>
            <option value="2">type 2</option>
          </select>
        </InputField>

        <InputField label="Quantite minimale">
          <input
            type="text"
            name="nom"
            placeholder="Quantite minimale"
            onChange={(e) => setQtemin(e.target.value)}
            value={qtemin}
          />
        </InputField>

        <InputField label="Reference">
          <input
            type="text"
            name="tel"
            placeholder="Reference"
            onChange={(e) => setReference(e.target.value)}
            value={reference}
          />
        </InputField>

        <Center>
          <Button type="submit" size="large" variant="primary" onClick={create}>
            <span>Enregistrer</span>
          </Button>
          <Button
            type="cancel"
            size="large"
            variant="primary"
            onClick={(e) =>
              (document.getElementById('myModal3').style.display = 'none')
            }
          >
            <span>Annuler</span>
          </Button>
        </Center>
        <Center>
          {/* <p>
						Don’t have an account? No worries,{' '}
						<Link to="/signup">you can create one now</Link>
					</p> */}
        </Center>
      </CardWrapper>
    </>
  )
}
