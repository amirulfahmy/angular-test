import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList: any[] = [];
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getDashboardData().subscribe({
      next: (res: any) => {
        if (res?.success === false){

        }
        else {
          this.userList = res?.tableUsers ?? [];
        }
        console.log(res);
      }
    })
  }

}
