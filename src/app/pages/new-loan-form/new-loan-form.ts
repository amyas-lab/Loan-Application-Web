import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LoanType } from '../../models/models';

@Component({
  selector: 'app-new-loan-form',
  imports: [FormsModule],
  templateUrl: './new-loan-form.html',
  styleUrl: './new-loan-form.css'
})
export class NewLoanFormComponent {
  private dataService = inject(DataService);
  private router = inject(Router);

  customers = this.dataService.customers;
  success = signal(false);

  readonly loanTypes: LoanType[] = ['Personal', 'Home', 'Business', 'Education', 'Vehicle'];

  form = {
    customerId: null as number | null,
    loanType: '' as LoanType | '',
    amount: null as number | null,
    durationMonths: null as number | null,
    purpose: '',
  };

  get selectedCustomerName(): string {
    if (!this.form.customerId) return '';
    const c = this.customers().find(c => c.id === +this.form.customerId!);
    return c ? c.name : '';
  }

  submit() {
    if (!this.form.customerId || !this.form.loanType || !this.form.amount || !this.form.durationMonths) return;
    this.dataService.addLoan({
      customerId: +this.form.customerId,
      customerName: this.selectedCustomerName,
      loanType: this.form.loanType as LoanType,
      amount: this.form.amount,
      durationMonths: this.form.durationMonths,
      purpose: this.form.purpose,
    });
    this.success.set(true);
    setTimeout(() => this.router.navigate(['/loan-application-list']), 1500);
  }

  reset() {
    this.form = { customerId: null, loanType: '', amount: null, durationMonths: null, purpose: '' };
    this.success.set(false);
  }
}
