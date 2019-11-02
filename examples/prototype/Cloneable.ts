/**
 * @description
 * conceptual instance coping. If you really want to get a copy of your instance then there are some
 * counterintuitive ways to achieve that, JSON.parse & JSON.stringify method for example :)
 * https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
 */
export abstract class Cloneable {
  public clone(): this {
    return Object.create(this);
  }
}
