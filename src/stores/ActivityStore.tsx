import { observable, action, extendObservable } from "mobx";

class ActivityStore {
  @observable
  isLoading: boolean = false;

  @observable
  activities: any[] = [];

  @action
  public loadActivities = () => {
    this.isLoading = true;
    fetch("http://localhost:3007/api/activities")
      .then((a: any) => a.json())
      .then((activities: any) => {
        this.setActivities(activities);
      });
  };

  @action
  public setActivities = (activities: any) => {
    this.activities = activities;
    this.isLoading = false;
  };

  @action
  public addActivity = async (activity: any) => {
    console.log("adding", activity);
    const addedActivity = await fetch("http://localhost:3007/api/activities", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...activity, userId: 1 })
    });
    console.log("addedActivity", addedActivity);
    this.activities.push(activity);
  };
}

const store = new ActivityStore();
export { ActivityStore };
export default store;
