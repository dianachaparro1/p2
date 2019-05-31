import { Component, OnInit } from '@angular/core';
import {GetjsonService} from '../../services/getjson.service';

@Component({
  selector: 'app-view-second',
  templateUrl: './view-second.component.html',
  styleUrls: ['./view-second.component.css']
})
export class ViewSecondComponent implements OnInit {

  constructor(private Service:GetjsonService) { }
  public datos;
  ngOnInit() {
    this.Service.getConfig().subscribe(resp=>{
      const response=resp;
      this.datos=response;
      console.log(response);
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  }

}
