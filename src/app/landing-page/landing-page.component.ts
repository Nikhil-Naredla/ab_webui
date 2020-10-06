import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tiles_data=[
    {"name":"Summary View","img":"/assets/png/summary.png", "url": "summaryView"},
    {"name":"Machine View","img":"/assets/png/machine.png", "url": "machineView"},
    {"name":"Kanban View","img":"/assets/png/kanban.png", "url": "kanbanView"},
    {"name":"Production Reports","img":"/assets/png/reports.png", "url": "productionReports"},
    {"name":"Digital Threads","img":"/assets/png/digital.png", "url": "digitalThreads"},
    {"name":"Data Matrix","img":"/assets/png/digital.png", "url": "dataMatrix"}
    ]

    navigateView(url){
      this.router.navigate([url])
    }
}

