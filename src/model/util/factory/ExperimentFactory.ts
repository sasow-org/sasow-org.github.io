import * as ts from 'typescript';
import { SimulationConfig } from '../config/SimulationConfig';
import { GenericExperiment } from '../../environments/GenericExperiment';
import { ExperimentConfig } from '../config/ExperimentConfig';
import { AgentConfig } from '../config/AgentConfig';
import { AgentConfigData } from '../config/data/AgentConfigData';
import { ActionConfigData } from '../config/data/ActionConfigData';
import { Action } from '../actions/Action';
import { ExperimentConfigData } from '../config/data/ExperimentConfigData';
import { FactoryDynamicClass } from './FactoryDynamicClass';

export class ExperimentFactory {
  public createExperiment(
    experimentConfigData: ExperimentConfigData,
  ) : GenericExperiment {
    const experimentConfig : ExperimentConfig = new ExperimentConfig(experimentConfigData.name, experimentConfigData.description, experimentConfigData.repetitions, experimentConfigData.essentialData, experimentConfigData.detailedData);
    const exp : GenericExperiment = new GenericExperiment(
      experimentConfig,
      () => {
        const agentConfigs : AgentConfig[] = [];
        experimentConfigData.agentConfigsData.forEach((agentConfigData: AgentConfigData) => {
          const actions : Action[] = [];

          agentConfigData.actionsData.forEach((actionData: ActionConfigData) => {
            const ActionRef = FactoryDynamicClass.getInstance().getAction(actionData.type);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            actions.push(new ActionRef(actionData.name, actionData.probability));
            /*
            const actionString = `new ${actionData.type}('${actionData.name}',${actionData.probability});`;
            const result = ts.transpile(actionString);
            console.log('result after transpile: ', result);
            const runnable : any = eval(result);
            console.log('runnable is: ', runnable);
            const x:any = runnable.Run('RUN!').then((res: any) => { console.log('DENTRO DE runnable, res:  -->', res); actions.push(res); });
            console.log(x);

             */
          });

          const auxConfig : AgentConfig = new AgentConfig(
            agentConfigData.nameConfig,
            agentConfigData.initialState,
            actions,
            agentConfigData.isSeed,
            agentConfigData.quantityAgent,
            agentConfigData.percentageFollowers,
            agentConfigData.percentageFollowings,
          );

          agentConfigs.push(auxConfig);
        });
        return new SimulationConfig(experimentConfigData.periods, experimentConfigData.networkSize, experimentConfigData.seedSize, agentConfigs);
      },
    );

    return exp;
  }
}
