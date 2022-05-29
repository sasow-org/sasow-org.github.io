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
    console.log('On factory Experiment ');
    console.log(experimentConfigData);
    const experimentConfig : ExperimentConfig = new ExperimentConfig(experimentConfigData.experimentType, experimentConfigData.name, experimentConfigData.description, experimentConfigData.repetitions, experimentConfigData.essentialData, experimentConfigData.detailedData);
    const exp : GenericExperiment = new GenericExperiment(
      experimentConfig,
      () => {
        const agentConfigs : AgentConfig[] = [];
        experimentConfigData.agentConfigsData.forEach((agentConfigData: AgentConfigData) => {
          const actions : Action[] = [];
          agentConfigData.actionsData.forEach(async (actionData: ActionConfigData) => {
            const ActionReferenceClass = FactoryDynamicClass.getInstance().getAction(actionData.type);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            actions.push(new ActionReferenceClass(actionData.name, actionData.probability));
          });
          const auxConfig : AgentConfig = new AgentConfig(
            agentConfigData.agentType,
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
        return new SimulationConfig(experimentConfigData.experimentType, experimentConfigData.periods, experimentConfigData.networkSize, experimentConfigData.seedSize, agentConfigs);
      },
    );

    return exp;
  }
}
