# Banking Application

A modern banking application that allows users to manage their account, deposit funds, withdraw money, and handle loan operations.

## How It Works

### Account Operations

- **View Balance**: See your current account balance in USD
- **Deposit Money**: Add funds to your account in multiple currencies (USD, EUR, GBP)
- **Withdraw Money**: Remove funds from your account
- **Request Loan**: Apply for a loan with a specified amount and purpose
- **Pay Loan**: Pay off your outstanding loan balance

### Currency Conversion

When depositing money in EUR or GBP, the application automatically converts it to USD using real-time exchange rates from the Frankfurter API.

### Customer Management

- Create a new customer account
- View customer information

## Tools and Technologies Used

### Frontend Framework

- **React** - Component-based user interface
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server

### State Management

- **Redux Toolkit** - Application state management
- **React Redux** - React bindings for Redux

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom animations** - Gradient effects and loading spinners

### API Integration

- **Frankfurter API** - Real-time currency exchange rates
- **Fetch API** - HTTP requests for currency conversion

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type checking

## Project Structure

- `/src/components/` - Reusable UI components
- `/src/features/accounts/` - Account management functionality
- `/src/features/customers/` - Customer management functionality
- `/src/hooks/` - Custom React hooks
- `/src/store.ts` - Redux store configuration
