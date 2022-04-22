import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AjouteremploiComponent } from './components/ajouteremploi/ajouteremploi.component';
import { AjouteretudiantComponent } from './components/ajouteretudiant/ajouteretudiant.component';
import { AjouterformationComponent } from './components/ajouterformation/ajouterformation.component';
import { AjouterformatteurComponent } from './components/ajouterformatteur/ajouterformatteur.component';
import { AjoutertravailComponent } from './components/ajoutertravail/ajoutertravail.component';
import { DepotetudiantComponent } from './components/depotetudiant/depotetudiant.component';
import { DepotformatteurComponent } from './components/depotformatteur/depotformatteur.component';
import { DetailsetudiantComponent } from './components/detailsetudiant/detailsetudiant.component';
import { DetailsformationComponent } from './components/detailsformation/detailsformation.component';
import { DetailsformatteurComponent } from './components/detailsformatteur/detailsformatteur.component';
import { EtudiantcalendrierComponent } from './components/etudiantcalendrier/etudiantcalendrier.component';
import { EtudiantdashboardComponent } from './components/etudiantdashboard/etudiantdashboard.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { FormatteurcalendrierComponent } from './components/formatteurcalendrier/formatteurcalendrier.component';
import { FormatteurdashboardComponent } from './components/formatteurdashboard/formatteurdashboard.component';
import { LoginsignupComponent } from './components/loginsignup/loginsignup.component';
import { ModifieremploiComponent } from './components/modifieremploi/modifieremploi.component';
import { ModifieretudiantComponent } from './components/modifieretudiant/modifieretudiant.component';
import { ModifierformationComponent } from './components/modifierformation/modifierformation.component';
import { ModifierformatteurComponent } from './components/modifierformatteur/modifierformatteur.component';
import { QuestionsetreponsesComponent } from './components/questionsetreponses/questionsetreponses.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { TouslesemploisComponent } from './components/touslesemplois/touslesemplois.component';
import { TouslesetudiantsComponent } from './components/touslesetudiants/touslesetudiants.component';
import { TouslesfeedbacksComponent } from './components/touslesfeedbacks/touslesfeedbacks.component';
import { TouslesformationsComponent } from './components/touslesformations/touslesformations.component';
import { TouslesformatteursComponent } from './components/touslesformatteurs/touslesformatteurs.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AdminonlyGuard } from './guards/adminonly.guard';
import { EtudiantonlyGuard } from './guards/etudiantonly.guard';
import { FormatteuronlyGuard } from './guards/formatteuronly.guard';


const routes: Routes = [
  { path: '' , redirectTo: '/admindashboard' , pathMatch:'full' },
  {path:'login',component:LoginsignupComponent},
  {path:'formatteurdashboard',canActivate:[FormatteuronlyGuard],component:FormatteurdashboardComponent,children: [
    {path:'questionsetreponses',component:QuestionsetreponsesComponent},
    {path:'depotformatteur',component:DepotformatteurComponent},
    {path:'',component:FormatteurcalendrierComponent},
    // ici le autre children
  ]},
  {path:'etudiantdashboard',canActivate:[EtudiantonlyGuard],component:EtudiantdashboardComponent,children:[
    {path:'questionsetreponses',component:QuestionsetreponsesComponent},
    {path:'feedbacks',component:FeedbacksComponent},
    {path:'depotetudiant',component:DepotetudiantComponent},
    {path:'ajoutertravail',component:AjoutertravailComponent},
    {path:'',component:EtudiantcalendrierComponent},
    // ici le autre children
  ]},
  {path:'admindashboard', canActivate:[AdminonlyGuard],component:AdmindashboardComponent, children : [
    {path:'touslesetudiants',component:TouslesetudiantsComponent},
    {path:'ajouteretudiant',component:AjouteretudiantComponent},
    {path:'modifieretudiant/:_id',component:ModifieretudiantComponent},
    {path:'detailsetudiant/:_id',component:DetailsetudiantComponent},
    {path:'touslesformatteurs',component:TouslesformatteursComponent},
    {path:'ajouterformatteur',component:AjouterformatteurComponent},
    {path:'modifierformatteur/:_id',component:ModifierformatteurComponent},
    {path:'detailsformatteur/:_id',component:DetailsformatteurComponent},
    {path:'touslesformations',component:TouslesformationsComponent},
    {path:'ajouterformation',component:AjouterformationComponent},
    {path:'touslesemplois',component:TouslesemploisComponent},
    {path:'ajouteremploi',component:AjouteremploiComponent},
    {path:'modifierformation/:_id',component:ModifierformationComponent},
    {path:'detailsformation/:_id',component:DetailsformationComponent},
    {path:'modifieremploi/:_id',component:ModifieremploiComponent},
    {path:'touslesfeedbacks',component:TouslesfeedbacksComponent},
    {path:'',component:StatistiquesComponent},
    {path:'statistiques',component:StatistiquesComponent},
    // ici le autre children
  ]},
  {path:'unauthorized',component:UnauthorizedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
