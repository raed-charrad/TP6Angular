import { Employee } from './Employee.model';

export class EmployeeWrapper{

_embedded!: { employees: Employee[]};

}
