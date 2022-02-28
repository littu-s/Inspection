import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionServiceService } from 'src/app/inspection-service.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any=[];

  // Map to display data associate with foreign key
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private service:InspectionServiceService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    this.refreshInspectionTypesMap();
  }

  //Properties
  modalTitle: string = '';
  activateAddUpdateInspectionComponent: boolean = false;
  inspection: any;

  modalAdd(){
    this.inspection = {
      inspectionId:0,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle = "Add Inspection";
    this.activateAddUpdateInspectionComponent = true;
  }

  modalUpdate(item:any) {
    this.inspection = item;
    this.modalTitle = "Update Inspection";
    this.activateAddUpdateInspectionComponent = true;
  }

  modalDelete(item:any) {
    if(confirm(`Do you want to delete inspection(Inspection Id:  ${item.inspectionId})?`)) {
      this.service.deleteInspection(item.inspectionId).subscribe(res => {
        var closeModalBtn = document.getElementById('add-update-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "none";
        }
      }, 4000);
      this.inspectionList$ = this.service.getInspectionList();
      });
    }
  }

  modalClose() {
    this.activateAddUpdateInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }

  refreshInspectionTypesMap() {
    this.service.getInspectionTypesList().subscribe(data => {
      this.inspectionTypesList = data;
      for(let i = 0; i < data.length; i++)
      {
        this.inspectionTypesMap.set(this.inspectionTypesList[i].inspectionTypeId, this.inspectionTypesList[i].inspectionName)
      }
    });
  }

}
