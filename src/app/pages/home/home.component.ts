import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { CommonModule } from '@angular/common';
import { dataFake } from '../../dataFake/dataFake';

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 articles = dataFake;

 constructor(){}
 ngOnInit(): void {
     console.log(this.articles)
 }

}
