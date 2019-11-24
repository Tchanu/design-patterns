// complex system of making hot drinks
export class HotDrinkMachine{
  boilWater(): void {
    console.log('Boiling water,');
  }
  addSugar(): void {
    console.log('Adding sugar,');
  }
  addEspresso(): void {
    console.log('Adding Espresso,');
  }
  addTea(): void {
    console.log('Adding tea,');
  }
  serve(): void {
    console.log('Serving.');
  }
}
