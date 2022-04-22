import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { ChartsModule } from 'ng2-charts';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './components/loginsignup/loginsignup.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminsidebarComponent } from './components/adminsidebar/adminsidebar.component';
import { TouslesetudiantsComponent } from './components/touslesetudiants/touslesetudiants.component';
import { AjouteretudiantComponent } from './components/ajouteretudiant/ajouteretudiant.component';
import { ModifieretudiantComponent } from './components/modifieretudiant/modifieretudiant.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsetudiantComponent } from './components/detailsetudiant/detailsetudiant.component';
import { RouterModule } from '@angular/router';
import { TouslesformatteursComponent } from './components/touslesformatteurs/touslesformatteurs.component';
import { AjouterformatteurComponent } from './components/ajouterformatteur/ajouterformatteur.component';
import { ModifierformatteurComponent } from './components/modifierformatteur/modifierformatteur.component';
import { DetailsformatteurComponent } from './components/detailsformatteur/detailsformatteur.component';
import { TouslesformationsComponent } from './components/touslesformations/touslesformations.component';
import { AjouterformationComponent } from './components/ajouterformation/ajouterformation.component';
import { TouslesemploisComponent } from './components/touslesemplois/touslesemplois.component';
import { AjouteremploiComponent } from './components/ajouteremploi/ajouteremploi.component';
import { DetailsformationComponent } from './components/detailsformation/detailsformation.component';
import { ModifierformationComponent } from './components/modifierformation/modifierformation.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GroupePipe } from './pipes/groupe.pipe';
import { ModifieremploiComponent } from './components/modifieremploi/modifieremploi.component';
import { AdminonlyGuard } from './guards/adminonly.guard';
import { EtudiantdashboardComponent } from './components/etudiantdashboard/etudiantdashboard.component';
import { FormatteurdashboardComponent } from './components/formatteurdashboard/formatteurdashboard.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormatteuronlyGuard } from './guards/formatteuronly.guard';
import { EtudiantonlyGuard } from './guards/etudiantonly.guard';
import { FormatteursidebarComponent } from './components/formatteursidebar/formatteursidebar.component';
import { FormatteurheaderComponent } from './components/formatteurheader/formatteurheader.component';
import { QuestionsetreponsesComponent } from './components/questionsetreponses/questionsetreponses.component';
import { EtudiantsidebarComponent } from './components/etudiantsidebar/etudiantsidebar.component';
import { EtudiantheaderComponent } from './components/etudiantheader/etudiantheader.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { TouslesfeedbacksComponent } from './components/touslesfeedbacks/touslesfeedbacks.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { DepotetudiantComponent } from './components/depotetudiant/depotetudiant.component';
import { DepotformatteurComponent } from './components/depotformatteur/depotformatteur.component';
import { AjoutertravailComponent } from './components/ajoutertravail/ajoutertravail.component';
import { FormatteurcalendrierComponent } from './components/formatteurcalendrier/formatteurcalendrier.component';
import { EtudiantcalendrierComponent } from './components/etudiantcalendrier/etudiantcalendrier.component';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
import { FooterComponent } from './components/footer/footer.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginsignupComponent,
    AdmindashboardComponent,
    HeaderComponent,
    AdminsidebarComponent,
    TouslesetudiantsComponent,
    AjouteretudiantComponent,
    ModifieretudiantComponent,
    DetailsetudiantComponent,
    TouslesformatteursComponent,
    AjouterformatteurComponent,
    ModifierformatteurComponent,
    DetailsformatteurComponent,
    TouslesformationsComponent,
    AjouterformationComponent,
    TouslesemploisComponent,
    AjouteremploiComponent,
    DetailsformationComponent,
    ModifierformationComponent,
    GroupePipe,
    ModifieremploiComponent,
    EtudiantdashboardComponent,
    FormatteurdashboardComponent,
    FormatteursidebarComponent,
    FormatteurheaderComponent,
    QuestionsetreponsesComponent,
    EtudiantsidebarComponent,
    EtudiantheaderComponent,
    FeedbacksComponent,
    TouslesfeedbacksComponent,
    UnauthorizedComponent,
    DepotetudiantComponent,
    DepotformatteurComponent,
    AjoutertravailComponent,
    FormatteurcalendrierComponent,
    EtudiantcalendrierComponent,
    StatistiquesComponent,
    FooterComponent,
    
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    FullCalendarModule,
    ChartsModule,
  ],
  providers: [AdminonlyGuard,FormatteuronlyGuard,EtudiantonlyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
