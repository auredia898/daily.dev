const { Comment , Post} = require('../../utils/index');

class CommentService{

    async createCommentForPost(commentData, userId){

        const newComment = await Comment.create(commentData, userId);

        if(commentData.postId) {
            const post = await Post.findOne( { where: {id: commentData.postId } });
            if(!post){
                throw new Error('Post not found!');
            }
            await newComment.addDegree(post);
        }
        return newComment;
    }

    async createCommentForComment(commentData, userId){

        const newComment = await Comment.create(commentData, userId);

        if(commentData.parentCommentId) {
            const comment = await Comment.findOne( { where: {id: commentData.parentCommentId } });
            if(!post){
                throw new Error('Comment not found!');
            }
            await newComment.addDegree(comment);
        }
        return newComment;
    }

    async updateProgram(id, programData){
        const program = await  Program.findOne({ where: { id } })
        if(!program){
            throw new Error ('Program not found!')        
        }
        
        await program.update(programData)

        if(programData.degreeId) {
            const degree = await Degree.findOne( { where: {id: programData.degreeId } });
            if(!degree){
                throw new Error('Degree not found!');
            }
            await program.setDegrees([degree]);
        }

        return program;
    }

    async deleteProgram(id){
        const program = await Program.findOne({ where: { id } })
        if(!program){
            throw new Error ('Program not found!')        
        }    
        await program.destroy();
        return program;
    }

    async getAllPrograms(){
        return await Program.findAll({ include: [ { model: University, attributes: ['id', 'name', 'emailUniversity'] }] });
    }

    async getProgramById(id){
        const program = await Program.findOne({
             where: {id},
             include: [ { model: University, attributes: ['id', 'name', 'emailUniversity'] }]
         });
        if (!program){
            throw new Error ('Program not found!') 
        }
        return program;
    }

    async getProgramByUniversity(universityId){
        const program = await Program.findOne({
            where: { universityId },
            include: [ { model: University, attributes: ['id', 'name', 'emailUniversity'] }]
        });
        if(!program){
            throw new Error ('Program not found!') 
        }
        return program;
    }
    
    async addDegreeToProgram(programId, degreeId){

        const program = await Program.findOne( { where: {id: programId } } )
        if(!program){
            throw new Error('Program not found!');
        }

        const degree = await Degree.findOne( { where: {id: degreeId } })
        if(!degree){
            throw new Error('Degree not found!')
        }
        
        await program.addDegree(degree)
        return program;
    }
}

module.exports = new CommentService()