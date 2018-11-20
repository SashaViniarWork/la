import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public allProject: any;
  constructor(public api: ApiService) {

  }

  ngOnInit() {
    this.api.get('projects').subscribe(res => {
      this.allProject = res;
      console.log(res);
      console.log(this.allProject);
    });
  }
  Search(stringV) {
    console.log(stringV);
    const tempArray = this.allProject;
    this.allProject = tempArray.filter(
      name => name.project_name === stringV);
  }

}
