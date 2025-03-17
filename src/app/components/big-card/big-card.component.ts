import { Component, input, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    console.log("init");
  }
  @Input()
  Id:string = '';
  @Input()
  photoCover:string = '';
  @Input()
  cardTitle:string = 'Titulo da noticia';
  @Input()
  cardDescription:string = 'dsinnjsnjdnianodiasnidhnaisndin sijadi nsa jdishndaidsniaj';


}
