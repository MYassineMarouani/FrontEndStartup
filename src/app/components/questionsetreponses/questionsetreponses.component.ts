import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReponseService } from 'src/app/services/reponse.service';

@Component({
  selector: 'app-questionsetreponses',
  templateUrl: './questionsetreponses.component.html',
  styleUrls: ['./questionsetreponses.component.css']
})
export class QuestionsetreponsesComponent implements OnInit {
  Reponsenew: any = {};
  p: number = 1;
  question: any;
  id:any;
  respone: any;
  Formatteurdetails: any;
  formatteuraffich: any;
  items: any = [];
  Etudiantdetails1: any;
  

  constructor(private Etudiant:EtudiantService,private Reponse1:ReponseService,private Reponse:ReponseService,private Formatteurquestion:FormateurService,private Formatteurdetails1:FormateurService,private Formateur:FormateurService,private router: Router, private Question1: QuestionService, private Question: QuestionService, public endpoint: EndpointService) { }
  Questionnew: any = {};
  QuestionFilter: any;
  ngOnInit() {
    this.id = this.Formateur.getformateurData().subject.id;
    this.Formatteurdetails1.getbyid(this.id).subscribe(
      res=>{
        this.respone = res
        this.Formatteurdetails = this.respone;
      }
    );
    
    
    this.Question.getall().subscribe(
      res => {
        this.question = res;
        this.QuestionFilter = res;
        console.log(this.question)
        // for (var k = 0; k < this.question.length; k++) {
        //   this.Formatteurquestion.getbyid(this.question[k].idUser).subscribe(
        //     res=>{
        //       this.respone = res
        //       this.formatteuraffich = this.respone;
        //       console.log(this.formatteuraffich)
        //     }
        //   )
          
        // }

        

      },
      err => {
        console.log(err);

      }
    );
  
    


   // fin ngoninit

  }
  filterItem(value) {
    this.question = this.QuestionFilter.filter(p => {
      return (
        p.title.toLowerCase().includes(value.toLowerCase()) ||
        p._id.toLowerCase().includes(value.toLowerCase())

      )
    })
  }
  ajouterquestion() {
    this.Questionnew.idUser = this.id;
    console.log(this.Questionnew);
    
     this.Question1.add(this.Questionnew).subscribe((data) => { 
       console.log("here is the question", data) ;
       this.ngOnInit();
      
      
      });
    
  }
  ajouterreponse(idQuestion) {
    let fd = new FormData();
    // fd.append('idUser', this.Formatteurdetails._id);
    // fd.append('description', this.Reponsenew.description);
    // fd.append('idQuestion',idQuestion)
    // console.log(this.Reponsenew.description)
    // console.log(this.Formatteurdetails._id)
    // console.log(idQuestion)
    // console.log(fd)
    this.items = [ 
      {idUser:this.id , description:this.Reponsenew.description  , idQuestion:idQuestion}
    ];
    console.log(this.items[0])
 

    this.Reponse.add(this.items[0]).subscribe((data) => { console.log("here is the reponse", data) });

  }

}
