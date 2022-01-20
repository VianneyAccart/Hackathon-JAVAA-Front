import { Product } from './product';

export class ProductProjectCategory {
  private _product: Product;
  private _isMustHave: boolean;

  constructor(product: Product, isMustHave: boolean) {
    this._product = product;
    this._isMustHave = isMustHave;
  }

  /**
   * Getter product
   * @return {Product}
   */
  public get product(): Product {
    return this._product;
  }

  /**
   * Getter isMustHave
   * @return {boolean}
   */
  public get isMustHave(): boolean {
    return this._isMustHave;
  }

  /**
   * Setter product
   * @param {Product} value
   */
  public set product(value: Product) {
    this._product = value;
  }

  /**
   * Setter isMustHave
   * @param {boolean} value
   */
  public set isMustHave(value: boolean) {
    this._isMustHave = value;
  }
}
