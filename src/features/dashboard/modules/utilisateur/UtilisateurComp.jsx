import Axios from 'axios'
import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import Button from 'ui/components/Button'
import {
  createUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
  fetchUtilisateurs,
} from '../../actions/utilisateur'

export default function UtilisateurComp(props) {
  const [utilisateur, setUtilisateur] = useState(props.utilisateur || {})
  const [login, setLogin] = useState(utilisateur.login || '')
  const [password, setPassword] = useState(utilisateur.password || '')
  const [profil, setProfil] = useState(
    (utilisateur.profil && utilisateur.profil.id) || ''
  )
  const [nom, setNom] = useState(utilisateur.nom || '')
  const [prenom, setPrenom] = useState(utilisateur.prenom || '')
  const [mail, setMail] = useState(utilisateur.mail || '')
  const [tel, setTel] = useState(utilisateur.tel || '')
  const [datecreation] = useState(utilisateur.datecreation || '')
  const [editing, setEditing] = useState(false)
  async function update(e) {
    e.preventDefault()
    try {
      const resp = await updateUtilisateur({
        id: utilisateur.id,
        login,
        password,
        idprofil: parseInt(profil),
        nom,
        prenom,
        tel,
        mail,
        datecreation,
      })
      const respo9 = await fetchUtilisateurs()
      props.setUtilisateurs(respo9.data)
    } catch (error) {
      alert('Erreur lors du modification', error.message)
    }
    setEditing(false)
  }

  async function deleteU(e) {
    e.preventDefault()
    try {
      const respo = await deleteUtilisateur(utilisateur.id)
      const respo2 = await fetchUtilisateurs()
      props.setUtilisateurs(respo2.data)
    } catch (error) {
      alert('Erreur lors du suppression', error.message)
    }
  }

  return (
    <li className="table-row">
      <div className="col col-1" data-label="Utilisateur Id">
        {utilisateur.id}
      </div>
      <div className="col col-2" data-label="Login">
        {!editing ? (
          login
        ) : (
          <input value={login} onChange={(e) => setLogin(e.target.value)} />
        )}
      </div>
      <div className="col col-3" data-label="Password">
        {!editing ? (
          '***********'
        ) : (
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
      </div>
      <div className="col col-4" data-label="Profile">
        {!editing ? (
          utilisateur.profil && utilisateur.profil.name
        ) : (
          <select value={login} onChange={(e) => setProfil(e.target.value)}>
            <option value="1">Administrateur</option>
            <option value="2">User</option>
          </select>
        )}
      </div>
      <div className="col col-5" data-label="Nom">
        {!editing ? (
          nom
        ) : (
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
        )}
      </div>
      <div className="col col-6" data-label="Prenom">
        {!editing ? (
          prenom
        ) : (
          <input value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        )}
      </div>
      <div className="col col-7" data-label="Email">
        {!editing ? (
          mail
        ) : (
          <input value={mail} onChange={(e) => setMail(e.target.value)} />
        )}
      </div>
      <div className="col col-8" data-label="Téléphone">
        {!editing ? (
          tel
        ) : (
          <input value={tel} onChange={(e) => setTel(e.target.value)} />
        )}
      </div>
      <div className="col col-9" data-label="Date Création">
        {datecreation}
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
            onClick={deleteU}
          >
            <NavLink to="#">Supprimer</NavLink>
          </Button>
        </div>
      </div>
    </li>
  )
}
