import { Routes } from '@angular/router';
import { AuthentificationComponent } from './Pages/resp_classe/authentification/authentification.component';
import { PageAcceuilComponent } from './Pages/resp_classe/page-acceuil/page-acceuil.component';
import path from 'path';
import { Component } from '@angular/core';
import { AcceuilEnseignantComponent } from './Pages/enseignant/acceuil-enseignant/acceuil-enseignant.component';
import { AvisComponent } from './Pages/resp_classe/avis/avis.component';
import { NotesComponent } from './Pages/resp_classe/notes/notes.component';
import { MessRPComponent } from './Pages/resp_classe/mess-rp/mess-rp.component';
import { CoursComponent } from './Pages/enseignant/cours/cours.component';
import { DirectivesComponent } from './Pages/enseignant/directives/directives.component';
import { ReunionComponent } from './Pages/enseignant/reunion/reunion.component';
import { TdTpComponent } from './Pages/enseignant/td-tp/td-tp.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'authentification',
        pathMatch:'full'
    },
    {
        path:'authentification',
        component:AuthentificationComponent
    },
    {
        path: 'page-acceuil',
        component:PageAcceuilComponent,
        
    },
    {
        path: 'enseignant/acceuil-enseignant',
        component:AcceuilEnseignantComponent
    },
    {
        path:'avis',
        component:AvisComponent
    },
    {
        path:'notes',
        component:NotesComponent
    },
    {
        path:'mess-rp',
        component:MessRPComponent
    },
    {
        path:'cours',
        component:CoursComponent
    },
    {
        path:'directives',
        component: DirectivesComponent
    },
    {
        path:'td-tp',
        component:TdTpComponent
    }
];
