
//################# Start post ######################

function postRoute(route,model, router ,isEmail){
    router.post(route, async (req, res) => {
        
        var data=new model (req.body)
        const token = req.headers.authorization;
        
        if (token ||isEmail) {
           try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
        } 
        }else{
            res.send('your not signed in')
        }
        
    
    })
}

//################# End post ######################
//---
//---
//---
//---
//---

//################# Start get all ######################

 function getRoute(route, routeModel,router){
    router.get(route, async (req, res) => {
        console.log('poiuyguiop');
         const token = req.headers.authorization;
        if (token ) {

    try{
        const data = await routeModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}else{
    res.send('your not signed in')
}
})}

//################# End get all ######################
//---
//---
//---
//---
//---

//################# Start get by id ######################

function getByID(route, model, router){
    router.get(`${route}/:id`, async (req, res) => {
        const token = req.headers.authorization;
        if (token) {
        try{
            const data = await model.findById(req.params.id);
            res.json(data)
        }
        catch(error){
            res.status(500).json({message: error.message})
        }
    }else{
        res.send('your not signed in')
    }
    })
}

//################# End get by id ######################
//---
//---
//---
//---
//---

//################# Start update ######################


function updateRoute (route,model,router){
    router.patch(`${route}/:id`, async (req, res) => {

        const token = req.headers.authorization;
        if (token) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const options = { new: true };
    
            const result = await model.findByIdAndUpdate(
                id, updatedData, options
            )
            
            res.send(result)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }else{
        res.send('your not signed in')
    }
    })
}

//################# End update ######################
//---
//---
//---
//---
//---

//################# Start delete ######################


function deleteRoute(route,model,router){
    router.delete(`${route}/:id`, async (req, res) => {
        const token = req.headers.authorization;
        if (token) {
        try {
            const id = req.params.id;
            const data = await model.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }else{

        res.send('your not signed in')
    }
    })
}
//################# End delete ######################
//---
//---
//---
//---
//---



module.exports = {getRoute,postRoute, getByID,updateRoute,deleteRoute}
