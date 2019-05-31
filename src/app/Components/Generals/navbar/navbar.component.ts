import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { GetjsonService } from '../../services/getjson.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public vista: string = 'home';
  constructor(private router: Router, private Service: GetjsonService) { }
  public home = function()
  {
    this.router.navigate(['']);
    this.vista = 'home';
  };

  public viewfirst = function(){
    this.router.navigate(['view-first']);
    this.vista = 'view-first';
  };
  
    public viewsecond = function(){
    this.router.navigate(['view-second']);
    this.vista = 'view-second';
  };




  ngOnInit() {
    this.Service.getConfig().subscribe(resp => {
      const response = resp;
      console.log(response);
    });
  }

}
