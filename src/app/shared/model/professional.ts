export class Professional {
    
  private _id: number;
  private _name: string;
  private _activity: string;
  private _picture: any;

  constructor(id: number, name: string, activity: string, picture: any) {
    this._id = id;
    this._name = name;
    this._activity = activity;
    this._picture = picture;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter activity
   * @return {string}
   */
  public get activity(): string {
    return this._activity;
  }

  /**
   * Getter picture
   * @return {any}
   */
  public get picture(): any {
    return this._picture;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter activity
   * @param {string} value
   */
  public set activity(value: string) {
    this._activity = value;
  }

  /**
   * Setter picture
   * @param {any} value
   */
  public set picture(value: any) {
    this._picture = value;
  }
}
