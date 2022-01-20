export class Professional {
    
  private _id: number;
  private _name: string;
  private _activity: string; // TODO: Set right type
  private _image: string;
  private _description : string;

  constructor(id: number, name: string, activity: string, image: string, description: string) {
    this._id = id;
    this._name = name;
    this._activity = activity;
    this._image = image;
    this._description = description;
  }

  // TODO : Add getters/setters
}
