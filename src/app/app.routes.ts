import { Routes } from '@angular/router';
import { AuthentificationComponent } from './Pages/resp_classe/authentification/authentification.component';
import { PageAcceuilComponent } from './Pages/resp_classe/page-acceuil/page-acceuil.component';
import path from 'path';
import { Component } from '@angular/core';
import { AcceuilEnseignantComponent } from './Pages/enseignant/acceuil-enseignant/acceuil-enseignant.component';

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
        component:PageAcceuilComponent
    },
    {
        path: 'enseignant/acceuil-enseignant',
        component:AcceuilEnseignantComponent
    }
];
