import { ProductProjectCategory } from "./ProductProjectCategory";
import { Professional } from "./professional";
import { User } from "./User";

export class Project {

    private _id : number;
    private _createdAt : Date;
    private _productProjectCategory:ProductProjectCategory[];
    private _user: User;
    private _professionals: Professional[];
    private _budget: number; 

    constructor(id: number, createdAt: Date, productProjectCategory : ProductProjectCategory[], user: User, professionals : Professional[], budget:number ) {
        this._id = id;
        this._createdAt= createdAt;
        this._productProjectCategory= productProjectCategory;
        this._user= user;
        this._professionals = professionals
        this._budget= budget;
    }

    
      /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter createdAt
     * @return {Date}
     */
	public get createdAt(): Date {
		return this._createdAt;
	}

    /**
     * Getter productProjectCategory
     * @return {ProductProjectCategory[]}
     */
	public get productProjectCategory(): ProductProjectCategory[] {
		return this._productProjectCategory;
	}

    /**
     * Getter user
     * @return {User}
     */
	public get user(): User {
		return this._user;
	}

    /**
     * Getter professionals
     * @return {Professional[]}
     */
	public get professionals(): Professional[] {
		return this._professionals;
	}

    /**
     * Getter budget
     * @return {number}
     */
	public get budget(): number {
		return this._budget;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter createdAt
     * @param {Date} value
     */
	public set createdAt(value: Date) {
		this._createdAt = value;
	}

    /**
     * Setter productProjectCategory
     * @param {ProductProjectCategory[]} value
     */
	public set productProjectCategory(value: ProductProjectCategory[]) {
		this._productProjectCategory = value;
	}

    /**
     * Setter user
     * @param {User} value
     */
	public set user(value: User) {
		this._user = value;
	}

    /**
     * Setter professionals
     * @param {Professional[]} value
     */
	public set professionals(value: Professional[]) {
		this._professionals = value;
	}

    /**
     * Setter budget
     * @param {number} value
     */
	public set budget(value: number) {
		this._budget = value;
	}


 }