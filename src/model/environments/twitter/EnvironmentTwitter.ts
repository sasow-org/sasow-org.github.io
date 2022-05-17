import { Environment } from '../../essential/Environment';
import { RowData } from '../../util/data/RowData';
import { Agent } from '../../essential/Agent';
import { AgentConfig } from '../../util/config/AgentConfig';

export class EnvironmentTwitter extends Environment {
  constructor(
    id: number,
    periods: number,
    networkSize: number,
    seedSize: number,
    agentsConfigs: AgentConfig[],
  ) {
    super(id, periods, networkSize, seedSize, agentsConfigs);
    console.log('Creando un environment Twitter con datos: ');
    console.log('id: ', id, ' periods: ', periods, ' networkSize: ', networkSize, ' seedSize: ', seedSize);
  }

  getCountStates(): RowData {
    const rd: RowData = new RowData();
    let prepared = 0;
    let noread = 0;
    let read = 0;
    let shared = 0;
    this.users.map((user: Agent) => {
      switch (user.state) {
        case Agent.PREPARE_FOR_SHARE:
          prepared++;
          break;
        case Agent.NOREAD:
          noread++;
          break;
        case Agent.READ:
          read++;
          break;
        case Agent.SHARED:
          shared++;
          break;
        default:
          break;
      }
    });
    rd.addRow(noread, 'state_noread');
    rd.addRow(read, 'state_count_read');
    rd.addRow(prepared, 'state_count_prepared');// A la proxima iteracion comparten
    rd.addRow(shared, 'state_count_shared');
    return rd;
  }

  step(): void {
    console.log(`Do Step (${this._period + 1}) of ${this._periods}`);
    if (this.period === 0) { // Primer periodo.
      this.seeds.map((seed: Agent) => {
        console.log('Soy una seed, con id: ', seed.agent_id, ' y mi estado es: ', seed.state);
        seed.doActions();
        console.log('Despues de seed.doActions, Sigo siendo seed id: ', seed.agent_id, ' Y mi estado ahora es ', seed.state);
      });
    } else {
      this.users.map((agent: Agent) => {
        agent.doActions();
      });
    }
  }

  run(): void {
    console.log('Starting in Environment ');
    let p = 0;
    this.period = p;
    while (this._period < (this._periods - 1)) {
      this.step();
      ++p;
      this.period = p;
    }

    this.step();
    ++p;
    this.period = p;
  }
}
