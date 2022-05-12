import { Creator } from './Creator';
import { Product } from './Product';
import { TwitterAgent } from '../../environments/twitter/TwitterAgent';
import { AgentConfig } from '../config/AgentConfig';

export class AgentTwitterFactory extends Creator {
  private readonly _agentConfig : AgentConfig;

  constructor(agentConfig: AgentConfig) {
    super();
    this._agentConfig = agentConfig;
  }

  create(id: number): TwitterAgent {
    return <TwitterAgent> this.createProduct(() => new TwitterAgent(id, this._agentConfig), // todo learn more about this.
    );
  }

  someOperation(): void {
    // todo Some operation is ? ...
  }

  createProduct(fun: Function): Product {
    return fun();
  }
}
