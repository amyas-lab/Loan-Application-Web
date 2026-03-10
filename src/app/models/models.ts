export interface Banker {
  id: number;
  name: string;
  employeeId: string;
  branch: string;
  role: string;
  status: 'Active' | 'Inactive';
  email: string;
  phone: string;
}

export interface Customer {
  id: number;
  name: string;
  nationalId: string;
  email: string;
  phone: string;
  address: string;
  registeredDate: string;
}

export type LoanStatus = 'Pending' | 'Approved' | 'Rejected';
export type LoanType = 'Personal' | 'Home' | 'Business' | 'Education' | 'Vehicle';

export interface LoanApplication {
  id: number;
  loanId: string;
  customerId: number;
  customerName: string;
  loanType: LoanType;
  amount: number;
  durationMonths: number;
  purpose: string;
  submittedDate: string;
  status: LoanStatus;
  assignedBankerId: number | null;
}
