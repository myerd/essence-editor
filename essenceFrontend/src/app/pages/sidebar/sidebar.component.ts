import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public projects: Project[] = []
  constructor(
    private _projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this._projectService.getProjects().subscribe(result => {
      this.projects = result;
    } );
  }

}
