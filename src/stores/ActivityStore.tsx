import { observable, action, extendObservable } from "mobx";

class ActivityStore {
  @observable
  isLoading: boolean = false;

  @observable
  activities: any[] = [];

  @action
  public loadActivities = () => {
    this.isLoading = true;
    setTimeout(this.setActivities, 1000);
  };

  @action
  public setActivities = () => {
    this.activities = [1, 3, 4];
    this.isLoading = false;
  };
}

const store = new ActivityStore();
export { ActivityStore };
export default store;
