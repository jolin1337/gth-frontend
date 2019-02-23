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

  @action
  public addActivity = async (activity: any) => {
    const addedActivity = await fetch("https://localhost:3007/api/activity", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(activity)
    });
    console.log("addedActivity", addedActivity);
    this.activities.push(activity);
  };
}

const store = new ActivityStore();
export { ActivityStore };
export default store;
