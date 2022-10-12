function getRoute(route, routeModel,app, ejs ){
    app.get(route, async (req, res) => {
        console.log('poiuyguiop');

    try{
        const data = await routeModel.find();
  
         const back = JSON.stringify(data)
               console.log(back);
         res.render(ejs,{
            
         })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})}

module.exports={getRoute}