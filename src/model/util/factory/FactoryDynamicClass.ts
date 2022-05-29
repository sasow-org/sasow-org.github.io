import { ActionRead } from '../actions/commands/ActionRead';
import { ActionShare } from '../actions/commands/ActionShare';
import { Action } from '../actions/Action';
import { EnvironmentTwitter } from '../../environments/twitter/EnvironmentTwitter';
import { TwitterAgent } from '../../environments/twitter/TwitterAgent';
import { Environment } from '../../essential/Environment';
import { Agent } from '../../essential/Agent';
import { SimulationTwitter } from '../../environments/twitter/SimulationTwitter';
import { Simulation } from '../../essential/Simulation';

export class FactoryDynamicClass {
  private static _instance : FactoryDynamicClass;

  private simulationClasses = new Map([['TwitterConfig', SimulationTwitter]]);

  private environmentClasses = new Map([['TwitterConfig', EnvironmentTwitter]]);

  private agentClasses = new Map([['TwitterAgent', TwitterAgent]]);

  private actionClasses = new Map([['ActionRead', ActionRead], ['ActionShare', ActionShare]]);

  public static getInstance() : FactoryDynamicClass {
    if (!FactoryDynamicClass._instance) {
      FactoryDynamicClass._instance = new FactoryDynamicClass();
    }

    return FactoryDynamicClass._instance;
  }

  public getEnvironment(environmentTypeKey: string) : Environment {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.environmentClasses.get(environmentTypeKey);
  }

  public getAction(actionTypeKey: string) : Action {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.actionClasses.get(actionTypeKey);
  }

  public getAgent(agentTypeKey: string) : Agent {
    // console.log('AgentTypeKey: ', agentTypeKey);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.agentClasses.get(agentTypeKey);
  }

  public getSimulation(simulationTypeKey: string) : Simulation {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.simulationClasses.get(simulationTypeKey);
  }
}
