import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { createClient, fetchClients } from 'features/dashboard/actions/client'
import InputField from 'ui/components/InputField'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import {
  Title,
  CardWrapper,
  Center,
} from 'features/dashboard/components/shared-style'
export default (props) => {
  const [adresse, setAdresse] = useState('')
  const [code, setCode] = useState('')
  const [ville, setVille] = useState('')
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')
  const [nom, setNom] = useState('')

  const create = async (e) => {
    e.preventDefault()
    try {
      const resp = await createClient({
        adresse,
        code,
        ville,
        mail,
        tel,
        nom,
      })
      console.log(resp)
      const respo = await fetchClients()
      props.setClients(respo.data)
      document.getElementById('myModal2').style.display = 'none'
    } catch (err) {
      alert('Erreur lors du creation', err.message)
    }
  }
  return (
    <>
      <Title>Creer Un nouveau Client</Title>
      <CardWrapper as={Card}>
        <InputField label="Email">
          <input
            type="text"
            name="mail"
            placeholder="Email"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </InputField>

        <InputField
          label="Ville"
          onChange={(e) => setVille(e.target.value)}
          value={ville}
        >
          <select>
            <option value="1">Casa</option>
            <option value="2">Rabat</option>
          </select>
        </InputField>

        <InputField label="Nom">
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
          />
        </InputField>

        <InputField label="Téléphone">
          <input
            type="text"
            name="tel"
            placeholder="Téléphone"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
        </InputField>

        <InputField label="Adresse">
          <input
            type="text"
            name="adresse"
            placeholder="Adresse"
            onChange={(e) => setAdresse(e.target.value)}
            value={adresse}
          />
        </InputField>

        <InputField label="Code">
          <input
            type="text"
            name="code"
            placeholder="Code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
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
              (document.getElementById('myModal2').style.display = 'none')
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
