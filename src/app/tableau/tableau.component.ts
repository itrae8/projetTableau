import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Personne } from '../shared/model/personne.model';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [CommonModule, SharedModule, DetailsComponent],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.scss'
})
export class TableauComponent {

  selection: Personne | null = null;

  personnes : Personne[] = [
    {
      id: 1,
      nom: 'Leclair',
      prenom : 'Emmanuel',
      dateDeNaissance: new Date('1980-05-11T08:00:00'), 
      age: 43,
      vivant: true,
      photo: 'https://ca.slack-edge.com/T3DDLQ09F-U3U3CFRGF-cdd45e365001-512'
    }
  ]

  constructor(){
  }

  ngOnInit(){
    this.personnes.push({
      id: 2,
      nom: 'Schwarzenegger',
      prenom : 'Arnold',
      dateDeNaissance: new Date('1947-07-30T10:00:00'), 
      age: 76,
      vivant: true,
      photo: 'https://i0.wp.com/dopagedemondenard.com/wp-content/uploads/2016/01/73a3de70c14f3b788de261282d8b251a-600x813x1.jpg?ssl=1'
    },
    {
      id: 3,
      nom: 'Bonaparte',
      prenom : 'Napoléon',
      dateDeNaissance: new Date('1769-08-15T12:00:00'), 
      age: 51,
      vivant: false,
      photo: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/760px-napoleon-david-2.jpg?w=710&h=839'
    })
  }

  selectionEvent(event : Event, personne: Personne){
    //console.log(event);
    this.selection = personne;
  }

  personneTrackBy(index: number, personne: Personne){
    return personne.id;
  }

  changerStatut(vivant: boolean){
    this.selection!.vivant = vivant;
  }

}
