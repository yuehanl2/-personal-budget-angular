import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'pb-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  // tslint:disable-next-line: typedef

  public dataSource = [
    {
      "title": "Eat out",
      "budget": 70
    },
    {
      "title": "Rent",
      "budget": 375
    },
    {
      "title": "Groceries",
      "budget": 110
    },
    {
      "title": "Electricity",
      "budget": 70
    },
    {
      "title": "Outdoor sports",
      "budget": 100
    },
    {
      "title": "Shopping",
      "budget": 100
    },
    {
      "title": "Water",
      "budget": 60
    }
  ];
  constructor(private dataService: DataService){}
  //constructor(private http: HttpClient) { }




  private svg;
  private colors;


  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg:svg")
    .attr("width", 450)
    .attr("height", 450)
    .append("svg:g")
    .attr(
      "transform",
      "translate(" + 200  + "," + 200+ ")");
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.dataSource.map(d => d.budget.toString()))
  .range(["#7FB3D5", "#2E86C1", "#85C1E9", "#76D7C4", "#D7BDE2","#F9E79F","#7D3C98"]);
}

private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>()
       .value((d: any) => Number(d.budget));


  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(this.dataSource))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(120)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(120);

  this.svg
  .selectAll('pieces')
  .data(pie(this.dataSource))
  .enter()
  .append('text')
  .text(d => d.data.title)
 // .text(d => d.data.budget)
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "central")
  .style("font-size", 12);



}

  ngOnInit(): void {
   // this.dataService.getBudget()
     //  .subscribe((dataSource: any) => {
      //onsole.log(dataSource);
      this.createSvg();
      this.createColors();
      this.drawChart();


    //});


}
}
