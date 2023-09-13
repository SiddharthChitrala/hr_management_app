import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  resumes: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllDetails();
  }

  goBack() {
    location.reload();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/resumes").subscribe(
      (resultData: any) => {
        console.log(resultData);
        this.resumes = resultData; // Update this line
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  filterResumes() {
    if (!this.searchTerm) {
      this.getAllDetails();
      return;
    }

    // Make sure this.resumes is an array before filtering
    if (Array.isArray(this.resumes)) {
      this.resumes = this.resumes.filter((resume) =>
        resume.full_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
