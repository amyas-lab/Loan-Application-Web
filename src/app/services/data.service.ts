import { Injectable, signal } from '@angular/core';
import { Banker, Customer, LoanApplication, LoanStatus, LoanType } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DataService {

  // ── Bankers ──────────────────────────────────────────────────────────────
  private _bankers = signal<Banker[]>([
    { id: 1, name: 'Nguyen Van An', employeeId: 'EMP-001', branch: 'Ha Noi HQ', role: 'Loan Officer', status: 'Active', email: 'an.nguyen@loanapp.vn', phone: '0901 234 567' },
    { id: 2, name: 'Tran Thi Bich', employeeId: 'EMP-002', branch: 'Ho Chi Minh City', role: 'Senior Analyst', status: 'Active', email: 'bich.tran@loanapp.vn', phone: '0912 345 678' },
    { id: 3, name: 'Le Van Cuong', employeeId: 'EMP-003', branch: 'Da Nang', role: 'Branch Manager', status: 'Active', email: 'cuong.le@loanapp.vn', phone: '0923 456 789' },
    { id: 4, name: 'Pham Thi Dung', employeeId: 'EMP-004', branch: 'Ha Noi HQ', role: 'Credit Analyst', status: 'Inactive', email: 'dung.pham@loanapp.vn', phone: '0934 567 890' },
    { id: 5, name: 'Hoang Van Em', employeeId: 'EMP-005', branch: 'Can Tho', role: 'Loan Officer', status: 'Active', email: 'em.hoang@loanapp.vn', phone: '0945 678 901' },
  ]);
  readonly bankers = this._bankers.asReadonly();

  // ── Customers ─────────────────────────────────────────────────────────────
  private _customers = signal<Customer[]>([
    { id: 1, name: 'Do Thi Phuong', nationalId: '079200012345', email: 'phuong.do@gmail.com', phone: '0901 111 222', address: '12 Le Loi, Ha Noi', registeredDate: '2024-01-15' },
    { id: 2, name: 'Vu Minh Hoang', nationalId: '079199056789', email: 'hoang.vu@gmail.com', phone: '0912 222 333', address: '34 Nguyen Hue, HCM', registeredDate: '2024-02-20' },
    { id: 3, name: 'Bui Thi Lan', nationalId: '079201034567', email: 'lan.bui@yahoo.com', phone: '0923 333 444', address: '56 Tran Phu, Da Nang', registeredDate: '2024-03-05' },
    { id: 4, name: 'Nguyen Duc Manh', nationalId: '079198078901', email: 'manh.nd@gmail.com', phone: '0934 444 555', address: '78 Hung Vuong, Can Tho', registeredDate: '2024-03-18' },
    { id: 5, name: 'Ly Thi Nga', nationalId: '079202023456', email: 'nga.ly@outlook.com', phone: '0945 555 666', address: '90 Ly Thuong Kiet, Ha Noi', registeredDate: '2024-04-01' },
    { id: 6, name: 'Cao Van Oanh', nationalId: '079197090123', email: 'oanh.cao@gmail.com', phone: '0956 666 777', address: '11 Bach Dang, Hai Phong', registeredDate: '2024-04-22' },
  ]);
  readonly customers = this._customers.asReadonly();

  // ── Loan Applications ─────────────────────────────────────────────────────
  private _loans = signal<LoanApplication[]>([
    { id: 1, loanId: 'LOAN-2024-001', customerId: 1, customerName: 'Do Thi Phuong', loanType: 'Home', amount: 500000000, durationMonths: 120, purpose: 'Buy apartment in Ha Noi', submittedDate: '2024-03-01', status: 'Approved', assignedBankerId: 1 },
    { id: 2, loanId: 'LOAN-2024-002', customerId: 2, customerName: 'Vu Minh Hoang', loanType: 'Business', amount: 200000000, durationMonths: 36, purpose: 'Expand retail shop', submittedDate: '2024-03-10', status: 'Pending', assignedBankerId: 2 },
    { id: 3, loanId: 'LOAN-2024-003', customerId: 3, customerName: 'Bui Thi Lan', loanType: 'Personal', amount: 50000000, durationMonths: 24, purpose: 'Medical expenses', submittedDate: '2024-03-15', status: 'Rejected', assignedBankerId: 1 },
    { id: 4, loanId: 'LOAN-2024-004', customerId: 4, customerName: 'Nguyen Duc Manh', loanType: 'Education', amount: 120000000, durationMonths: 60, purpose: 'University tuition', submittedDate: '2024-03-22', status: 'Pending', assignedBankerId: 3 },
    { id: 5, loanId: 'LOAN-2024-005', customerId: 5, customerName: 'Ly Thi Nga', loanType: 'Vehicle', amount: 350000000, durationMonths: 48, purpose: 'Buy car for work commute', submittedDate: '2024-04-01', status: 'Approved', assignedBankerId: 2 },
    { id: 6, loanId: 'LOAN-2024-006', customerId: 6, customerName: 'Cao Van Oanh', loanType: 'Personal', amount: 30000000, durationMonths: 12, purpose: 'Home renovation', submittedDate: '2024-04-10', status: 'Pending', assignedBankerId: null },
  ]);
  readonly loans = this._loans.asReadonly();

  private nextId = { banker: 6, customer: 7, loan: 7 };

  // ── Banker Actions ────────────────────────────────────────────────────────
  addBanker(b: Omit<Banker, 'id' | 'employeeId' | 'status'>): void {
    const id = this.nextId.banker++;
    const empId = `EMP-${String(id).padStart(3, '0')}`;
    this._bankers.update(list => [...list, { ...b, id, employeeId: empId, status: 'Active' }]);
  }

  deleteBanker(id: number): void {
    this._bankers.update(list => list.filter(b => b.id !== id));
  }

  // ── Customer Actions ──────────────────────────────────────────────────────
  addCustomer(c: Omit<Customer, 'id' | 'registeredDate'>): void {
    const id = this.nextId.customer++;
    const today = new Date().toISOString().split('T')[0];
    this._customers.update(list => [...list, { ...c, id, registeredDate: today }]);
  }

  deleteCustomer(id: number): void {
    this._customers.update(list => list.filter(c => c.id !== id));
  }

  // ── Loan Application Actions ──────────────────────────────────────────────
  addLoan(l: Pick<LoanApplication, 'customerId' | 'customerName' | 'loanType' | 'amount' | 'durationMonths' | 'purpose'>): void {
    const id = this.nextId.loan++;
    const loanId = `LOAN-${new Date().getFullYear()}-${String(id).padStart(3, '0')}`;
    const today = new Date().toISOString().split('T')[0];
    this._loans.update(list => [...list, { ...l, id, loanId, submittedDate: today, status: 'Pending', assignedBankerId: null }]);
  }

  updateLoanStatus(id: number, status: LoanStatus): void {
    this._loans.update(list => list.map(l => l.id === id ? { ...l, status } : l));
  }
}
