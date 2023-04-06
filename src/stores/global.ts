import { makeAutoObservable } from 'mobx';
import { currentUser } from '@/services/user';

class Global {
  time: number = new Date().getTime();

  constructor() {
    makeAutoObservable(this);
  }

  setTime(value: number) {
    this.time = value;
    return value;
  }

  *fetchValue(value: number) {
    yield currentUser({});
    return value;
  }
}
const global = new Global();
export default global;
