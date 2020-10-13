import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'ui/components/Container'
import { NavLink } from 'react-router-dom'
import Button from 'ui/components/Button'
import SEO from 'ui/components/SEO'
import UtilisateurComp from './UtilisateurComp'
import { createUtilisateur, fetchUtilisateurs } from '../../actions/utilisateur'
import NewUtilisateur from './newUtilisateur'
import './styles.scss'

export default function Utilisateur() {
  const [utilisateurs, setUtilisateurs] = useState([])
  const [newUtilisateur] = useState({})
  const [creating, setCreating] = useState(false)
  useEffect(() => {
    async function fetchUtilisateurs() {
      try {
        const data = await axios.get(`/utilisateur/findAll`)
        setUtilisateurs(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUtilisateurs()
    console.log(utilisateurs)
  }, [])
  async function create(e) {
    e.preventDefault()
    try {
      const respo = await createUtilisateur(newUtilisateur)
      const respo1 = await fetchUtilisateurs()
      setUtilisateurs(respo1.data)
    } catch (error) {
      alert('Error while creating user', error.message)
    }
  }
  return (
    <Container>
      <SEO url="/" title="Utilisateur" />
      <div className="container">
        <div className="header">
          <h2>Utilisateur</h2>
          <Button
            onClick={(e) =>
              (document.getElementById('myModal').style.display = 'block')
            }
          >
            {<NavLink to="#">Creer un Utilisateur</NavLink>}
          </Button>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={(e) =>
                  (document.getElementById('myModal').style.display = 'none')
                }
              >
                &times;
              </span>
              <NewUtilisateur setUtilisateurs={setUtilisateurs} />
            </div>
          </div>
        </div>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Utilisateur Id</div>
            <div className="col col-2">Login</div>
            <div className="col col-3">Password</div>
            <div className="col col-4">Profile</div>
            <div className="col col-6">Nom</div>
            <div className="col col-7">Prenom</div>
            <div className="col col-8">Email</div>
            <div className="col col-9">Téléphone</div>
            <div className="col col-10">Date Création</div>
          </li>

          {utilisateurs &&
            utilisateurs.map((utilisateur, index) => {
              return (
                <UtilisateurComp
                  utilisateur={utilisateur}
                  key={index}
                  setUtilisateurs={setUtilisateurs}
                />
              )
            })}
        </ul>
      </div>
    </Container>
  )
}

const newUtilisateur = () => <div></div>
