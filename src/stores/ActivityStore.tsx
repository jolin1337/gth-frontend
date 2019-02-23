import { observable, action, extendObservable } from "mobx";

class ActivityStore {
  @observable
  isLoading: boolean = false;

  @observable
  activities: any[] = [];

  @action
  public loadActivities = () => {
    this.isLoading = true;
    fetch('http://localhost:3007/api/activities').then((a : any) => a.json())
    .then((activities : any) => {
      this.setActivities(activities);
    });
  };

  @action
  public setActivities = (activities : any) => {
    this.activities = activities;
    this.isLoading = false;
  };
}

const store = new ActivityStore();
export { ActivityStore };
export default store;
