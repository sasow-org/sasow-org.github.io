import { Action } from '../util/actions/Action';
import { IDataDetailed } from '../util/data/interfaces/IDataDetailed';
import { IObservable } from '../util/datahandler/observer/IObservable';
import { RowData } from '../util/data/RowData';
import { AgentConfig } from '../util/config/AgentConfig';
import { Product } from '../util/factory/Product';

export abstract class Agent implements IDataDetailed, IObservable, Product {
  public static SHARED = -1;

  public static NOREAD = 0;

  public static READ = 1;

  public static PREPARE_FOR_SHARE = 2;

  protected _state: number;

  protected _agent_id: number;

  protected _followers: Agent[];

  protected _followings: Agent[];

  protected _actions: Action[];

  protected _isSeed: boolean;

  protected _agentConfig: AgentConfig;

  protected constructor(id: number, agentConfig: AgentConfig) {
    this._state = agentConfig.initialState;
    this._agent_id = id;
    this._isSeed = agentConfig.isSeed;
    this._actions = agentConfig.actions;
    // Initialize lists
    this._followers = [];
    this._followings = [];
    // load config
    this._agentConfig = agentConfig;
  }

  public abstract doActions();

  public addFriend(agent: Agent): void {
    let exist = false;

    if (agent._agent_id === this._agent_id) {
      exist = true;
    } else {
      for (let i = 0; i < this._followers.length; i++) {
        if (this._followers[i]._agent_id === agent._agent_id) {
          exist = true;
          break;
        }
      }
    }

    if (!exist) {
      this._followers.push(agent);
    }
  }

  public addFollowing(agent: Agent) : void {
    let exist = false;

    if (agent._agent_id === this._agent_id) {
      exist = true;
    } else {
      for (let i = 0; i < this._followings.length; i++) {
        if (this._followings[i]._agent_id === agent._agent_id) {
          exist = true;
          break;
        }
      }
    }

    if (!exist) {
      this._followings.push(agent);
    }
  }

  public receiveMessage() : void {
    if (this.state === Agent.NOREAD) {
      const action : Action = this._actions.find((actionFind) => actionFind.name === 'read');
      action.Execute(this);
      if (this._state === Agent.READ) {
        const action2 : Action = this._actions.find((actionFind) => actionFind.name === 'share');
        action2.Execute(this);
      }
    }
  }

  get state(): number {
    return this._state;
  }

  set state(value: number) {
    this._state = value;
  }

  get agent_id(): number {
    return this._agent_id;
  }

  set agent_id(value: number) {
    this._agent_id = value;
  }

  get followers(): Agent[] {
    return this._followers;
  }

  set followers(value: Agent[]) {
    this._followers = value;
  }

  get followings(): Agent[] {
    return this._followings;
  }

  set followings(value: Agent[]) {
    this._followings = value;
  }

  get actions(): Action[] {
    return this._actions;
  }

  set actions(value: Action[]) {
    this._actions = value;
  }

  get isSeed(): boolean {
    return this._isSeed;
  }

  set isSeed(value: boolean) {
    this._isSeed = value;
  }

  get agentConfig() : AgentConfig {
    return this._agentConfig;
  }

  set agentConfig(agentConfig: AgentConfig) {
    this._agentConfig = agentConfig;
  }

  DataDetailed(): RowData {
    const rd : RowData = new RowData();
    rd.addRow(this._agent_id, 'agent_id');
    rd.addRow(this._state, 'agent_state');
    rd.addRow(this._isSeed, 'agent_seed');
    rd.addRow(this._agentConfig.nameConfig, 'agent_type');
    return rd;
  }

  // eslint-disable-next-line class-methods-use-this
  notifyData(): void {
    console.log('TEXTO');
  }

  operation() {
    console.log('TEXTO');
  }
}
