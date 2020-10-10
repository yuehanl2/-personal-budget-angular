import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  //constructor(private dataService: DataService){}
  public dataSource = {
    datasets: [
      {
          data: [],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#04B45F',
              '#2E3B0B',
              '#FE2EF7',

          ],
      }
  ],
  labels: [

  ]

};


constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //.subscribe((res: any) =>
     // this.dataService.getBudget()

      // tslint:disable-next-line: no-debugger
      //debugger;
      this.http.get('http://localhost:3000/budget')
      .subscribe((res: any) => {
        // tslint:disable-next-line: no-debugger
        debugger;
        console.log(res);
        for (var i = 0; i < res.length; i++){
          this.dataSource.datasets[0].data[i] = res[i].budget;
          this.dataSource.labels[i] = res[i].title;
          this.createChart();
  }
    });
    //this.createChart();
  }

   // tslint:disable-next-line: typedef
   createChart() {
    // var ctx = document.getElementById('myChart').getContext('2d');

    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });

 }

}
