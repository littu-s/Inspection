import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionServiceService } from 'src/app/inspection-service.service';

@Component({
  selector: 'app-add-update-inspection',
  templateUrl: './add-update-inspection.component.html',
  styleUrls: ['./add-update-inspection.component.css']
})
export class AddUpdateInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private service:InspectionServiceService) { }

  @Input() inspection:any;
  inspectionId:number = 0;
  status: string = "";
  comments: string = "";
  inspectionTypeId!: number;

  ngOnInit(): void {
    this.inspectionId = this.inspection.inspectionId;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.service.getStatusList();
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
  }

  addInspection(){
    var inspection = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    };
    this.service.addInspection(inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-update-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      }, 4000);
    });
  }

  updateInspection() {
    var inspection = {
      inspectionId: this.inspectionId,
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    };
    var inspectionId:number = this.inspectionId;
    this.service.updateInspection(inspectionId, inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-update-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none";
        }
      }, 4000);
    });
  }
}
