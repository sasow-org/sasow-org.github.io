import { Action } from '../Action';
import { Agent } from '../../../essential/Agent';

export class ActionShare extends Action {
  // Todo old todo XD from java, fix states to make a fixed shared message.

  Execute(agent: Agent): void {
    const p1: number = this.getRandom();
    if (p1 / 100 > (1 - this.probability)) { // Si lo lee
      agent.state = Agent.PREPARE_FOR_SHARE;// Marca al agente como estado leido
    }
  }
}
