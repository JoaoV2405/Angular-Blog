import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  ngOnInit(): void {}
  constructor(){}
  @Input()
  photoCover:string = 'sadkmdmak';
  @Input()
  cardTitle:string = 'dksmamdsa';
  @Input()
  Id:string = '';

}
