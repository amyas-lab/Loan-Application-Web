import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Banker } from '../../models/models';

@Component({
  selector: 'app-banker-list',
  imports: [FormsModule],
  templateUrl: './banker-list.html',
  styleUrl: './banker-list.css'
})
export class BankerListComponent {
  private dataService = inject(DataService);

  bankers = this.dataService.bankers;

  showModal = signal(false);

  form = {
    name: '',
    branch: '',
    role: '',
    email: '',
    phone: '',
  };

  openModal() {
    this.form = { name: '', branch: '', role: '', email: '', phone: '' };
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  addBanker() {
    if (!this.form.name.trim() || !this.form.branch.trim() || !this.form.role.trim()) return;
    this.dataService.addBanker({ ...this.form });
    this.closeModal();
  }

  deleteBanker(id: number) {
    if (confirm('Are you sure you want to delete this banker?')) {
      this.dataService.deleteBanker(id);
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map(p => p[0]).slice(-2).join('').toUpperCase();
  }
}
