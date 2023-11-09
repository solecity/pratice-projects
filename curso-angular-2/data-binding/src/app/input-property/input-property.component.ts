import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  //inputs: ['nomeCurso:nome'],
})
export class InputPropertyComponent {
  @Input('nome') nomeCurso: string = '';
}
