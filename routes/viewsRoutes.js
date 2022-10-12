const express = require('express');
const adsModel = require('../model/ads_model')
const teamModel= require('../model/team_model')
const clientModel  = require('../model/client_model')
const blogModel = require('../model/blog_model')
const serviceModel = require('../model/servies_model')
const clinicModel = require('../model/clinic_model');
const doctor_model = require('../model/doctor_model');
const swiperModel = require('../model/swiper_model')
const faqModel = require('../model/faq_model')





const viewRouter = express.Router()

//##################### start home ######################################

    viewRouter.get('/', async (req, res) => {
        console.log('polplp');

    try{
        const teamData = await teamModel.find();
        const data = await adsModel.find();
        const clientData = await clientModel.find()
        const blogData = await blogModel.find()
        const serviceData = await serviceModel.find()
        const adsData = await adsModel.find()
        const swiper = await swiperModel.find()

  
         const ads = adsData
         const ourTeam = teamData
         const client = clientData
         const blog= blogData
         const service= serviceData
         
         res.render('home/index',{
            ads : ads[0],
            ourTeam : ourTeam,
            client:client,
            blog: blog,
            service:service,
            swiper:swiper

         })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

viewRouter.get('/home', async(req, res)=>{
    res.redirect('/')
})

//##################### end home ######################################
//--------
//--------
//--------
//--------
//--------

//##################### start blog ######################################


viewRouter.get('/blogs',async(req, res)=>{

    try {
        const blogData = await blogModel.find()

        const blog= blogData

         res.render('blog/blogs',{
            blog: blog,

         })
    } catch (error) {
        res.status(500).json({message: error.message})
    }

   
})
viewRouter.get('/blog/:id',async (req, res)=>{
    try{
        const blogs = await blogModel.find();

        const data = await blogModel.findById(req.params.id);
        res.render('blog/blog',{
            blog:data,
            blogs:blogs
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//##################### end blog ######################################
//--------
//--------
//--------
//--------
//--------

//##################### start doctor ####################################

viewRouter.get('/doctors',async(req, res)=>{
    
    
        res.render('doctor/doctors')
        
    
})
viewRouter.get('/doctor/:id',async (req, res)=>{
    try{
        const data = await doctor_model.findById(req.params.id);
        res.render('doctor/doctor',{
            doctor:data
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//##################### end doctor ####################################
//--------
//--------
//--------
//--------
//--------

//##################### start clinics ####################################

viewRouter.get('/clinics',async(req, res)=>{
    const clinic = await  clinicModel.find()
    try {
       res.render('clinic/clinics',
       {
        clinic:clinic
       })  
    } catch (error) {
        res.status(500).json(error.message)
    }

   
})


viewRouter.get('/clinic/:id',async (req, res)=>{
    try{
        const data = await clinicModel.findById(req.params.id);
        res.render('clinic/clinic',{
            clinic:data
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//##################### end clinic ####################################
//--------
//--------
//--------
//--------
//--------

//##################### start contact us ####################################


viewRouter.get('/contact-us',async(req, res)=>{
    
    
    res.render('contact_us/contact_us')
    

})


viewRouter.get('/about-us',async(req, res)=>{
    
    
    res.render('contact_us/about_us')
    

})

viewRouter.get('/faq',async(req, res)=>{

    try {
        const data = await faqModel.find()
       res.render('contact_us/faq',{
        data:data
       }) 
    } catch (error) {
        
    }
    
    
    

})
//##################### end contact us ####################################
//--------
//--------
//--------
//--------
//--------

//##################### start services ####################################

viewRouter.get('/services',async(req, res)=>{
   
    try {

        
        res.render('services/services',

       {
        service:service

       })  
    } catch (error) {
        res.status(500).json(error.message)
    }

   
})


viewRouter.get('/service/:id',async (req, res)=>{
    try{
        const blog = await blogModel.find()
        const data = await serviceModel.findById(req.params.id);
        res.render('services/service',{
            service:data,
            blog:blog
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

viewRouter.get('/privacy',((req,res)=>{
    res.render('./Privacy/privacy')
}))
module.exports=viewRouter
