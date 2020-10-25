import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProjectDialogComponent } from '../../dialogs/add-project-dialog/add-project-dialog.component';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

}
