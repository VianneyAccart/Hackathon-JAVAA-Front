export class Product{
    private title: string;
    private price: number ;
    private picture:any;
    
    constructor(
        title: string ,
        price: number,
        picture:any
        ) {
            this.title = title;
            this.price = price;  
            this.picture = picture;
        }
           /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $price
     * @return {number }
     */
	public get $price(): number  {
		return this.price;
	}

    /**
     * Getter $picture
     * @return {any}
     */
	public get $picture(): any {
		return this.picture;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $price
     * @param {number } value
     */
	public set $price(value: number ) {
		this.price = value;
	}

    /**
     * Setter $picture
     * @param {any} value
     */
	public set $picture(value: any) {
		this.picture = value;
	} 
       
    }