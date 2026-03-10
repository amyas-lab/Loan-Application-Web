import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LoanStatus } from '../../models/models';

type FilterTab = 'All' | LoanStatus;

@Component({
  selector: 'app-loan-application-list',
  imports: [RouterLink], // Keep RouterLink for the "New Application" button link
  templateUrl: './loan-application-list.html',
  styleUrl: './loan-application-list.css'
})
export class LoanApplicationListComponent {
  private dataService = inject(DataService);

  allLoans = this.dataService.loans;
  activeFilter = signal<FilterTab>('All');

  readonly tabs: FilterTab[] = ['All', 'Pending', 'Approved', 'Rejected'];

  filteredLoans = computed(() => {
    const f = this.activeFilter();
    const loans = this.allLoans();
    return f === 'All' ? loans : loans.filter(l => l.status === f);
  });

  countFor(tab: FilterTab): number {
    if (tab === 'All') return this.allLoans().length;
    return this.allLoans().filter(l => l.status === tab).length;
  }

  setFilter(tab: FilterTab) { this.activeFilter.set(tab); }

  approve(id: number) { this.dataService.updateLoanStatus(id, 'Approved'); }
  reject(id: number)  { this.dataService.updateLoanStatus(id, 'Rejected');  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
}
