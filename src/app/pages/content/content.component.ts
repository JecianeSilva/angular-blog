import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css','./content.responsive.component.css']
})

export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = ''
  @Input()
  contentTitle: string = ''
  @Input()
  contentDescription: string = ''
  @Input()
  private id: string | null= '0'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit():void { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    });
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter( data => data.id.toString() === id)

    if(result){
      this.photoCover = result[0].photoCover
      this.contentTitle = result[0].title
      this.contentDescription = result[0].description
    }
  }
}
