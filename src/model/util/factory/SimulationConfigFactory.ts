import { AgentConfig } from '../config/AgentConfig';
import { SimulationConfig } from '../config/SimulationConfig';

export class SimulationConfigFactory {
  public createSimulationConfig(
    periods: number,
    networkSize: number,
    seedSize: number,
    agentConfigs: AgentConfig[],
  ) : SimulationConfig {
    return new SimulationConfig(periods, networkSize, seedSize, agentConfigs);
  }
}
