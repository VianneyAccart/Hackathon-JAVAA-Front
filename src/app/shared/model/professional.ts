export class Professional{

    private name: string;
    private activity: string ;
    private picture:any;
    
    constructor(
        name: string ,
        activity: string,
        picture:any
        ) {
            this.name = name;
            this.activity = activity;
            this.picture = picture;
        }
        
        /**
         * Getter $name
         * @return {string }
         */
        public get $name(): string  {
            return this.name;
        }
        
        /**
         * Setter $name
         * @param {string } value
         */
        public set $name(value: string ) {
            this.name = value;
        }
        
        
            /**
             * Getter $activity
             * @return {string }
             */
            public get $activity(): string  {
                return this.activity;
            }
        
            /**
             * Getter $picture
             * @return {any}
             */
            public get $picture(): any {
                return this.picture;
            }
        
            /**
             * Setter $activity
             * @param {string } value
             */
            public set $activity(value: string ) {
                this.activity = value;
            }
        
            /**
             * Setter $picture
             * @param {any} value
             */
            public set $picture(value: any) {
                this.picture = value;
            }
    }