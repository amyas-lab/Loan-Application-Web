import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customer-list',
  imports: [FormsModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerListComponent {
  private dataService = inject(DataService);

  allCustomers = this.dataService.customers;
  searchQuery = signal('');
  showModal = signal(false);

  filteredCustomers = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.allCustomers();
    return this.allCustomers().filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.nationalId.includes(q)
    );
  });

  form = { name: '', nationalId: '', email: '', phone: '', address: '' };

  openModal() {
    this.form = { name: '', nationalId: '', email: '', phone: '', address: '' };
    this.showModal.set(true);
  }

  closeModal() { this.showModal.set(false); }

  addCustomer() {
    if (!this.form.name.trim() || !this.form.nationalId.trim()) return;
    this.dataService.addCustomer({ ...this.form });
    this.closeModal();
  }

  deleteCustomer(id: number) {
    if (confirm('Delete this customer?')) {
      this.dataService.deleteCustomer(id);
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map(p => p[0]).slice(-2).join('').toUpperCase();
  }
}
