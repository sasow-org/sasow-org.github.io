import { Action } from '../actions/Action';
import { ActionRead } from '../actions/commands/ActionRead';
import { ActionShare } from '../actions/commands/ActionShare';

export class FactoryDynamicClass {
  private static _instance: FactoryDynamicClass;

  actionClasses = { ActionRead, ActionShare };

  public static getInstance() : FactoryDynamicClass {
    if (!FactoryDynamicClass._instance) {
      FactoryDynamicClass._instance = new FactoryDynamicClass();
    }
    return FactoryDynamicClass._instance;
  }

  public getAction(nameKey : string) : Action {
    return this.actionClasses[nameKey];
  }
}
