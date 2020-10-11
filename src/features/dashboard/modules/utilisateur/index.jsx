import React from 'react'
import Container from 'ui/components/Container'
import { NavLink } from 'react-router-dom'
import Button from 'ui/components/Button'
import SEO from 'ui/components/SEO'
import UtilisateurComp from './UtilisateurComp'
import './styles.scss'

export default function Utilisateur() {
  return (
    <Container>
      <SEO url="/" title="Utilisateur" />
      <div class="container">
        <h2>Utilisateur</h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Utilisateur Id</div>
            <div class="col col-2">Username</div>
            <div class="col col-3">Profile</div>
            <div class="col col-4">Nom</div>
            <div class="col col-5">Prenom</div>
            <div class="col col-6">Email</div>
            <div class="col col-7">Téléphone</div>
            <div class="col col-8">Date Création</div>
          </li>
          <li class="table-row">
            <div class="col col-1" data-label="Utilisateur Id">
              42235
            </div>
            <div class="col col-2" data-label="Username">
              John Doe
            </div>
            <div class="col col-3" data-label="Profile">
              administrateur
            </div>
            <div class="col col-4" data-label="Nom">
              Elomari
            </div>
            <div class="col col-5" data-label="Prenom">
              Mustafa
            </div>
            <div class="col col-5" data-label="Email">
              Mustafa@elomari.com
            </div>
            <div class="col col-6" data-label="Téléphone">
              0633333333
            </div>
            <div class="col col-7" data-label="Date Création">
              23/02/2020
            </div>
            <div className="list-item-footer">
              <div class="col col-8">
                <Button type="button" size="large" variant="secondary">
                  <NavLink to="#">Modifier</NavLink>
                </Button>
              </div>
              <div class="col col-9">
                <Button type="button" size="large" variant="secondary">
                  <NavLink to="#">Supprimer</NavLink>
                </Button>
              </div>
            </div>
          </li>
          <li class="table-row">
            <div class="col col-1" data-label="Utilisateur Id">
              42235
            </div>
            <div class="col col-2" data-label="Username">
              John Doe
            </div>
            <div class="col col-3" data-label="Profile">
              administrateur
            </div>
            <div class="col col-4" data-label="Nom">
              Elomari
            </div>
            <div class="col col-5" data-label="Prenom">
              Mustafa
            </div>
            <div class="col col-5" data-label="Email">
              Mustafa@elomari.com
            </div>
            <div class="col col-6" data-label="Téléphone">
              0633333333
            </div>
            <div class="col col-7" data-label="Date Création">
              23/02/2020
            </div>
            <div className="list-item-footer">
              <div class="col col-8">
                <Button type="button" size="large" variant="secondary">
                  <NavLink to="#">Modifier</NavLink>
                </Button>
              </div>
              <div class="col col-9">
                <Button type="button" size="large" variant="secondary">
                  <NavLink to="#">Supprimer</NavLink>
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  )
}
