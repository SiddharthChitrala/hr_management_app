import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruitment-onboarding',
  templateUrl: './recruitment-onboarding.component.html',
  styleUrls: ['./recruitment-onboarding.component.css']
})
export class RecruitmentOnboardingComponent implements OnInit {
  resumes: any[] = [];
  editedResumeId: string | null = null;
  editedStatus: string = '';
  isEditing: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getResumes();
  }

  getResumes() {
    this.http.get('http://localhost:9000/resumes').subscribe(
      (data: any) => {
        this.resumes = data;
      },
      (error) => {
        console.error('Error fetching resumes:', error);
      }
    );
  }

  deleteResume(resumeId: string) {
    if (confirm('Are you sure you want to delete this resume?')) {
      this.http.delete(`http://localhost:9000/deleteResume/${resumeId}`).subscribe(
        () => {
          this.getResumes(); // Refresh the list after deletion
          console.log('Resume deleted successfully');
        },
        (error) => {
          console.error('Error deleting resume:', error);
        }
      );
    }
  }

  startEditing(resumeId: string, currentStatus: string) {
    this.editedResumeId = resumeId;
    this.editedStatus = currentStatus;
    this.isEditing = true;
  }

  updateStatus() {
    const formData = { status: this.editedStatus };
    this.http.put(`http://localhost:9000/updateStatus/${this.editedResumeId}`, formData).subscribe(
      () => {
        this.getResumes(); // Refresh the list after editing
        console.log('Status updated successfully');
        this.cancelEditing();
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

  cancelEditing() {
    this.isEditing = false;
    this.editedResumeId = null;
    this.editedStatus = '';
  }
}
