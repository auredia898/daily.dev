const SubscriptionService = require('./subscriptionService');


class SubscriptionController{

    async createSubscription (req, res){
        try{
            const userId = req.user.userId;
            const subscriptionData = {userId}
            const newSubscription = await SubscriptionService.createSubscription(subscriptionData)
            res.status(201).json({message: 'Subscription created successfully', newSubscription})
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteSubscription(req, res){
        try{
            const { id } = req.params;
            const deleteSubscription = await SubscriptionService.deleteSubscription(id)
            res.status(200).send(deleteSubscription);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllSubscription(req, res){
        try{
            const subscription = await SubscriptionService.getAllSubscription();
            res.status(200).json(subscription);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new SubscriptionController();