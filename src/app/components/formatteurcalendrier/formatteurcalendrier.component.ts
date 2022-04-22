import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EmploiService } from 'src/app/services/emploi.service';
import { FormateurService } from 'src/app/services/formateur.service';
@Component({
  selector: 'app-formatteurcalendrier',
  templateUrl: './formatteurcalendrier.component.html',
  styleUrls: ['./formatteurcalendrier.component.css']
})
export class FormatteurcalendrierComponent implements OnInit {
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
   
    eventBackgroundColor: 'blue',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    
  };
  emplois: any;
  formatteurdata: any;

  constructor(private Formatteur:FormateurService,private Emploi:EmploiService,) { }

  ngOnInit() {
    this.formatteurdata=this.Formatteur.getformateurData().subject;

    
    this.Emploi.getmyemploiformatteur(this.formatteurdata.id).subscribe(
      res => {
        this.emplois=res;
        console.log(this.emplois)

        for(let i=0; i < this.emplois.length; i++){
          this.Events.push({ title: this.emplois[i].title, start: this.emplois[i].date_debut, end: this.emplois[i].date_fin , display: 'color'})

        }

        this.calendarOptions = {
          initialView: 'dayGridMonth',
        
          events: this.Events,
        };
      },
      err => {
        console.log(err);

      }
    );
  
 
  
  }

}
