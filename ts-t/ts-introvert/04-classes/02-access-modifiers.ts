class BankAccount {
  readonly id: number;
  public accountNUmber: string;
  private balance: number;
  protected owner: string;

  constructor(id: number, accountNumber: string, owner: string) {

  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): boolean {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(213, '321321321', 'Vas');
account.deposit(110);
account.withdraw(10);
