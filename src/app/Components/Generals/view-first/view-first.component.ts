import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/getjson.service';

@Component({
  selector: 'app-view-first',
  templateUrl: './view-first.component.html',
  styleUrls: ['./view-first.component.css']
})
export class ViewFirstComponent implements OnInit {

  constructor( private Service: GetjsonService) { }

  private ID:number;

public datos =
{
  id: this.ID,
  nombre:"",
  usuario:"",
  telefono:"",
  direccion:"",
  email: "",
  foto:"https://images.pexels.com/photos/2313642/pexels-photo-2313642.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

};

public getdata = function()
{
  this.Service.getConfig().subscribe(resp =>{
    const response = resp;
    console.log(response);
  },
  error =>{
    console.log(JSON.stringify(error));
  })

  for(let i = 0; Response.length<= i; i++)
  {
    this.ID = i;
  }
}




  ngOnInit() {
    this.Service.getConfig().subscribe(res => {
      const response = res;
      console.log(response);
    },
    error =>{
      console.log(JSON.stringify(error));

    }
    );
  }

  public Submit = function() {
    this.ShowPostForm = false;
    return this.Service.PostConfig(this.datos).subscribe(res =>
      {
        const response = res;
    console.log(response);
    this.getdata(); 
      },
      error =>{
        console.log(JSON.stringify(error));
      }
      );
    };
    
    public delete = function() {
      this.ShowPostForm = false;
      return this.Service.dropConfig(1).subscribe(res=>
        {
          const response = res;
          console.log(response);
          this.getdata();
        },
        error =>{
          console.log(JSON.stringify(error));
        }
      );
    };

  }


 