# Loan Application Web

This project is a web-based Loan Application management system built with Angular. It is designed to demonstrate a complete flow for managing bankers, customers, and loan applications with a modern Single-Page Application (SPA) architecture.

## Features

- **Authentication**: User login portal.
- **Banker Management**: View and manage bank staff list.
- **Customer Management**: View and manage customer profiles.
- **Loan Applications**:
  - List all current loan applications.
  - Create new loan applications via an integrated submission form.

## Technology Stack

- **Framework**: Angular 17+
- **Styling**: Bootstrap 5, FontAwesome
- **Language**: TypeScript

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your local machine. You will also need the Angular CLI.

```bash
npm install -g @angular/cli
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amyas-lab/Loan-Application-Web.git
   cd Loan-Application-Web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project Structure

- `src/app/pages/login`: Login component.
- `src/app/pages/banker-list`: Banker management.
- `src/app/pages/customer-list`: Customer directory.
- `src/app/pages/loan-application-list`: Dashboard for loan applications.
- `src/app/pages/new-loan-form`: Form to submit new loans.

## License

This project is licensed under the MIT License.
