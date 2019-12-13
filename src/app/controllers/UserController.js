const { User } = require('../models');


module.exports = {
    
    async index(req, res){ 
        const users = await User.findAll();
        
        return res.json(users);
    },

    async store(req, res){
        const { name, email, gender, age } = req.body;
        const emailExists = await User.findOne({ 
            where: {
                email
            }
         });

        if (emailExists) {
            console.log('Email já existe');
            return res.json({ errors: "Email já existe" });
        }

        const user = await User.create({ name , email, gender, age });
        return res.json(user); 
    },

    async detail(req, res){
        const userEx = req.params.id;

        if(userEx){
            const user = await User.findByPk( userEx );
            return res.json(user);
        }
        
        res.json({ message: 'Usuário não existe' })
    },

    async delete(req, res){
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.json(user);
    }
}