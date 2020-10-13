import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  createUtilisateur,
  fetchUtilisateurs,
} from 'features/dashboard/actions/utilisateur'
import InputField from 'ui/components/InputField'
import Button from 'ui/components/Button'
import Card from 'ui/components/Card'
import {
  Title,
  CardWrapper,
  Center,
} from 'features/dashboard/components/shared-style'
export default (props) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [idprofil, setProfil] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')

  const create = async (e) => {
    e.preventDefault()
    try {
      const resp = await createUtilisateur({
        login,
        password,
        mail,
        idprofil,
        tel,
        nom,
        prenom,
      })
      console.log(resp)
      const respo = await fetchUtilisateurs()
      props.setUtilisateurs(respo.data)
      document.getElementById('myModal').style.display = 'none'
    } catch (err) {
      alert('Erreur lors du creation', err.message)
    }
  }
  return (
    <>
      <Title>Creer Un nouveau utilisateur</Title>
      <CardWrapper as={Card}>
        <InputField label="Username">
          <input
            type="text"
            name="login"
            placeholder="Username"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
        </InputField>
        <InputField label="Password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputField>
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
          label="Profile"
          onChange={(e) => setProfil(e.target.value)}
          value={idprofil}
        >
          <select>
            <option value="1">Administrateur</option>
            <option value="2">User</option>
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
        <InputField label="Prenom">
          <input
            type="text"
            name="prenom"
            placeholder="Prenom"
            onChange={(e) => setPrenom(e.target.value)}
            value={prenom}
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

        <Center>
          <Button type="submit" size="large" variant="primary" onClick={create}>
            <span>Enregistrer</span>
          </Button>
          <Button
            type="cancel"
            size="large"
            variant="primary"
            onClick={(e) =>
              (document.getElementById('myModal').style.display = 'none')
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
