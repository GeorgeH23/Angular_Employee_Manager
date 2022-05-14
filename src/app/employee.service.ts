import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeList } from './employeeList';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<EmployeeList> {
    return this.http.get<EmployeeList>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }

}
