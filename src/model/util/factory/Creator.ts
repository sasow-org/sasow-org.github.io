import { Product } from './Product';

export abstract class Creator {
  public abstract someOperation() : void ;
  public abstract createProduct(fun:Function) : Product;
}
