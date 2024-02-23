import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/student';
import { StudentService } from '../service/student.service';
import { response } from 'express';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LogoutService } from '../service/logout.service';
import { LoginuserService } from '../service/loginuser.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  public students: Student[];
  public editStudent: Student;
  public deleteStudent: Student;
  currentUser: User | null;
  
  constructor(private studentService: StudentService,private loginuserService: LoginuserService, private logoutService: LogoutService) {}

  ngOnInit() {
    this.getStudents();
    this.currentUser = this.loginuserService.getCurrentUser();

  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddStudent(addForm: NgForm): void {
    document.getElementById('add-student-form').click();
    this.studentService.addStudent(addForm.value).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateStudent(student: Student): void {
    this.studentService.updateStudent(student).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudents(key: string): void {
    console.log(key);
    const results: Student[] = [];
    for (const student of this.students) {
      if (student.fullName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(student);
      }
    }
    this.students = results;
    if (results.length === 0 || !key) {
      this.getStudents();
    }
  }

  public onOpenModal(student: Student, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStudentModal');
    }
    if (mode === 'edit') {
      this.editStudent = student;
      button.setAttribute('data-target', '#updateStudentModal');
    }
    if (mode === 'delete') {
      this.deleteStudent = student;
      button.setAttribute('data-target', '#deleteStudentModal');
    }
    container.appendChild(button);
    button.click();
  }

  generateUrlForStudent(): string {
    const role = this.loginuserService.getCurrentUser().role.toLowerCase();
    return `/${role}-dashboard`;
  }

  logout() {
    this.logoutService.logout();
  }
}
