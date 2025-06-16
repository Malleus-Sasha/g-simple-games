function CheckPermission(role: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (role !== 'admin') {
        console.log(`Permission role: ${role}`);
        return;
      }
      return originalMethod.apply(this, args);
    }
  }
}


class SecureService {
  performSensitiveOperation(): void {
    console.log('performSensitiveOperation');
  }
}
