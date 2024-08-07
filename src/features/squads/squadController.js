const SquadService = require('./squadService');



class SquadController{

    async createSquad (req, res){
        try{
            const {name, squadHandle, description, publicSquad, active, squadTypeId} = req.body
            
            console.log("1");
            const squadData = {
                name, 
                squadHandle, 
                description, 
                publicSquad, 
                active, 
                picture: req.file? req.file.path : null, 
                squadTypeId
            }

            const newSquad = await SquadService.createSquad(squadData);
            res.status(201).json({message: 'Squad created successfully', newSquad})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }

    async updateSquad(req, res){
        try{
            const { id } = req.params;
            const {name, squadHandle, description, publicSquad, active, squadTypeId, picture} = req.body
            const squadData = { name, squadHandle, description, publicSquad, active, squadTypeId, picture}
            const updateSquad = await SquadService.updateSquad(id, squadData);
            res.status(200).json(updateSquad);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = new SquadController();