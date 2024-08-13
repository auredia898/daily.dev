const { Subscription } = require('../../utils/index')

class SubscriptionService {   

    async createSubscription(subscriptionData){
        return await Subscription.create(subscriptionData)
    }

    async deleteSubscription(id){
        const subscription = await Subscription.findOne({ where: { id } })
        if(!subscription){
            throw new Error ('Subscription not found!')        
        }    
        await subscription.destroy();
        return { message: 'Subscription deleted successfully' };

    }

    async getAllSubscription(){
        return await Subscription.findAll();
    }
}

module.exports = new SubscriptionService();