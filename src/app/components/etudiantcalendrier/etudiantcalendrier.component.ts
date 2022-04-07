import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { EmploiService } from 'src/app/services/emploi.service';

@Component({
  selector: 'app-etudiantcalendrier',
  templateUrl: './etudiantcalendrier.component.html',
  styleUrls: ['./etudiantcalendrier.component.css']
})
export class EtudiantcalendrierComponent implements OnInit {
  
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



  constructor(private Emploi:EmploiService,) { }

  ngOnInit() {

    
      this.Emploi.getall().subscribe(
        res => {
          this.emplois=res;

          for(let i=0; i < this.emplois.length; i++){
            this.emplois[i].color = { primary:"#000000" }

          }

          this.calendarOptions = {
            initialView: 'dayGridMonth',
          
            events: this.emplois,
          };
        },
        err => {
          console.log(err);
  
        }
      );
  
 
  
  }

}
