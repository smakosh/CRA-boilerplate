import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import Button from 'ui/components/Button'
import {
  createClient,
  updateClient,
  deleteClient,
  fetchClients,
} from '../../actions/client'

export default function ClientComp(props) {
  const [client, setClient] = useState(props.client || {})
  const [adresse, setAdresse] = useState(client.adresse || '')
  const [code, setCode] = useState(client.code || '')
  const [ville, setVille] = useState((client.ville && client.ville.id) || '')
  const [mail, setMail] = useState(client.mail || '')
  const [tel, setTel] = useState(client.tel || '')
  const [nom, setNom] = useState(client.nom || '')
  const [datecreation] = useState(client.datecreation || '')
  const [editing, setEditing] = useState(false)
  async function update(e) {
    e.preventDefault()
    try {
      const resp = await updateClient({
        id: client.id,
        adresse,
        code,
        ville,
        nom,
        tel,
        mail,
        datecreation,
      })
      const respo9 = await fetchClients()
      props.setClients(respo9.data)
    } catch (error) {
      alert('Erreur lors du modification', error.message)
    }
    setEditing(false)
  }

  async function deleteC(e) {
    e.preventDefault()
    try {
      const respo = await deleteClient(client.id)
      const respo2 = await fetchClients()
      props.setClients(respo2.data)
    } catch (error) {
      alert('Erreur lors du suppression', error.message)
    }
  }

  return (
    <li className="table-row">
      <div className="col col-1" data-label="Client Id">
        {client.id}
      </div>

      <div className="col col-5" data-label="Nom">
        {!editing ? (
          nom
        ) : (
          <input value={nom} onChange={(e) => setNom(e.target.value)} />
        )}
      </div>
      <div className="col col-4" data-label="Ville">
        {!editing ? (
          client.ville && client.ville.name
        ) : (
          <select value={ville} onChange={(e) => setVille(e.target.value)}>
            <option value="1">Casablanca</option>
            <option value="2">Rabat</option>
          </select>
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
      <div className="col col-8" data-label="Code">
        {!editing ? (
          code
        ) : (
          <input value={code} onChange={(e) => setCode(e.target.value)} />
        )}
      </div>
      <div className="col col-8" data-label="Adresse">
        {!editing ? (
          adresse
        ) : (
          <input value={adresse} onChange={(e) => setAdresse(e.target.value)} />
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
            onClick={deleteC}
          >
            <NavLink to="#">Supprimer</NavLink>
          </Button>
        </div>
      </div>
    </li>
  )
}
