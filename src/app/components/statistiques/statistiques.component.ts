import { Component, OnInit } from '@angular/core';
import { EmploiService } from 'src/app/services/emploi.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { FormationService } from 'src/app/services/formation.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';
import { TravailmaisonService } from 'src/app/services/travailmaison.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color , Label } from 'ng2-charts';




@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Nombre de formations par mois' },
  ];
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July','Auguest','September','October','November','December'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  etudiants: any;
  seances : any;
  formations: any;
  questions: any;
  reponses: any;
  formatteurs: any;
  feedbacks: any;
  depots: any;

  constructor(private Etudiant:EtudiantService ,private Formatteur:FormateurService ,private Formation:FormationService ,private Feedback:FeedbacksService ,private depot:TravailmaisonService ,private tache:EmploiService ,private question:QuestionService ,private reponse:ReponseService,) { }

  ngOnInit() {
    this.Etudiant.getall().subscribe(
      res=>{
        this.etudiants = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.Formation.getall().subscribe(
      res=>{
        this.formations = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.Formatteur.getall().subscribe(
      res=>{
        this.formatteurs = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.question.getall().subscribe(
      res=>{
        this.questions = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.Feedback.getall().subscribe(
      res=>{
        this.feedbacks = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.depot.getall().subscribe(
      res=>{
        this.depots = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.reponse.getall().subscribe(
      res=>{
        this.reponses = res;
      },
      err=>{
        console.log(err);
        
      }
    );
    this.tache.getall().subscribe(
      res=>{
        this.seances = res;
      },
      err=>{
        console.log(err);
        
      }
    );

    this.makeformationStatData('2022');
  }




  
makeformationStatData(y){


    this.Formation.getall().subscribe(
      res=>{
        this.formations = res;
        
       let j=0;
       let f=0;
       let m=0;
       let a=0;
       let ma=0;
       let ju=0;
       let jui=0;
       let ao=0;
       let s=0;
       let o=0;
       let n=0;
       let d=0;


       for(let i = 0; i<this.formations.length; i++ ){
         let d = this.formations[i].date;


          let date = d.substr(5, 2);
          let year = d.substr(0,4);

          date === '01' && year == y ? j++ :
          date === '02' && year == y ? f++ :
          date === '03' && year == y ? m++ :
          date === '04' && year == y ?  a++ :
          date === '05' && year == y ? ma++ :
          date === '06' && year == y ? ju++ :
          date === '07' && year == y ? jui++ :
          date === '08' && year == y ? ao++ :
          date === '09' && year == y ? s++ :
          date === '10' && year == y ? o++ :
          date === '11' && year == y ? n++ :
          date === '12' && year == y ? d++ : null



       }

       this.lineChartData[0].data = [j , f, m , a , ma, ju ,  jui , ao , s , o , n , d];

      }
    );
  }


}
