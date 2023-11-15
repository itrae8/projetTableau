import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges, } from '@angular/core';
import { Personne } from '../../shared/model/personne.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  @Input({ required: true }) personne!: Personne;

  @Output() changerStatutEvent = new EventEmitter<boolean>;

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    this.personne = changes['personne'].currentValue;
  }

  changerStatut(){
    this.changerStatutEvent.emit(!this.personne.vivant);
  }

}
