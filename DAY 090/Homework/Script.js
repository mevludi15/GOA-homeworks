class Subscription {
    constructor(userID, plan, paymentMethod) {
        this.userID = userID;
        this.plan = plan;
        this.paymentMethod = paymentMethod;
    }
  
    upgradePlan(newPlan) {
        console.log("new plan")
    }
    }
}