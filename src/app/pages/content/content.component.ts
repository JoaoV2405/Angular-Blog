import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../dataFake/dataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  private id:string | null ='0'
  constructor(private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      
      if (this.id) {
        this.setValuesToComponent(this.id);
      }
    });
  }
  
  @Input()
  photoCover:string = '';
  @Input()
  contentTitle:string = '';
  @Input()
  contentDescription:string = '';

  setValuesToComponent(id: string) {
    const result = dataFake.find(article => article.id === id); 

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    } else {
      console.error("ID não encontrado!");
    }
  }
}
