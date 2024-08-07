const SquadTypeService = require('./squadTypeService');


class SquadTypeController{

    async createSquadType (req, res){
        try{
            const {name} = req.body
            const squadTypeData = {name}
            const newTypeSquad = await SquadTypeService.createSquadType(squadTypeData)
            res.status(201).json(newTypeSquad)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateSquadType(req, res){
        try{
            const { id } = req.params;
            const {name} = req.body
            const squadTypeData = { name}
            const updateSquadType = await SquadTypeService.updateSquadType(id, squadTypeData);
            res.status(200).json(updateSquadType);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteSquadType(req, res){
        try{
            const { id } = req.params;
            const deleteSquadType = await SquadTypeService.deleteSquadType(id)
            res.status(200).send(deleteSquadType);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllSquadType(req, res){
        try{
            const SquadTypes = await SquadTypeService.getAllSquadType();
            res.status(200).json(SquadTypes);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new SquadTypeController();