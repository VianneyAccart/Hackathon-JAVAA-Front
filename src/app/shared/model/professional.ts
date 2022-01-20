import { Activity } from './Activity';

export class Professional {

  private _id: number;
  private _name: string;
  private _image: string;
  private _description: string;
  private _activity: Activity;

  constructor(
    id: number,
    name: string,
    activity: Activity,
    image: string,
    description: string
  ) {
    this._id = id;
    this._name = name;
    this._activity = activity;
    this._image = image;
    this._description = description;
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
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter activity
     * @return {Activity}
     */
	public get activity(): Activity {
		return this._activity;
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
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter activity
     * @param {Activity} value
     */
	public set activity(value: Activity) {
		this._activity = value;
	}

}
