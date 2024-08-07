const typeSquadService = require('./typeSquad.Service');


class typeSquadController{

    async createTypeSquad (req, res){
        try{
            const {name} = req.body
            const typeSquadData = { name}
            const newTypeSquad = await typeSquadService.createTypeSquad(typeSquadData)
            res.status(201).json(newTypeSquad)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateTypeSquad(req, res){
        try{
            const { id } = req.params;
            const {name} = req.body
            const degreeData = { name}
            const updateDegree = await DegreeService.updateDegree(id, degreeData);
            res.status(200).json(updateDegree);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteTypeSquad(req, res){
        try{
            const { id } = req.params;
            const deleteDegree = await DegreeService.deleteDegree(id)
            res.status(200).send({message: 'Degree deleted successfully!', deleteDegree});
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllTypeSquad(req, res){
        try{
            const Degrees = await DegreeService.getAllDegrees();
            res.status(200).json(Degrees);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getTypeSquadById(req, res){
        try{
            const { id } = req.params;
            const degree = await DegreeService.getDegreeById(id);
            res.status(200).json(degree);
        }catch(error){
            res.staus(404).json({ message: error.message})
        }
    }
}

module.exports = new typeSquadController();