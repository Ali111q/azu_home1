const express = require('express');
const Model = require('../model/model');
const constant = require('../utils/constant')
const doctorModel=require('../model/doctor_model')
const clinicModel=require('../model/clinic_model')
const blogModel=require('../model/blog_model')
const helper = require('../helper/route_helper');
const adsModel = require('../model/ads_model')
const clientModel=require('../model/client_model')
const teamModel = require('../model/team_model')
const linkModel= require('../model/subscripe_model')
const swiperModel=require('../model/swiper_model')
const doModel=require('../model/do_model')
const serviesModel = require('../model/servies_model')
const  subscripeModel=require('../model/subscripe_model')
const login = require('../helper/login_helper')
const faqModel= require('../model/faq_model')




const router = express.Router()





//upload photo
router.post('/addPhoto',async(req,res)=>{
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;
            
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./assets/doctor_images/' + avatar.name);
            

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                path:constant.url+"/"+avatar.name,
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

//doctor routes
//.
//.
//.
//.
//.
//.
//.
//.
//-------------------------doctor--------------------------------------------doctor
              
helper.postRoute('/addDoctor',doctorModel,router)
helper.getRoute('/getDoctors',doctorModel,router)
helper.getByID('/getDoctor',doctorModel,router)
helper.updateRoute('/updateDoctor',doctorModel,router)
helper.deleteRoute('/deleteDoctor',doctorModel,router)



//Clinic routes
//.
//.
//.
//.
//.
//.
//.
//.
//-------------------------Clinic--------------------------------------------Clinic

helper.postRoute('/addClinic',clinicModel,router)
helper.getRoute('/getClinics',clinicModel,router)
helper.getByID('/getClinic',clinicModel,router)
helper.updateRoute('/updateClinic',clinicModel,router)
helper.deleteRoute('/deleteClinic',clinicModel,router)




// blog
//
//
//
//
//
//
//
//-----------------------blog-------------------------------------------------blog--

helper.postRoute('/addBlog',blogModel,router)
 helper.getRoute('/getBlogs',blogModel,router)
 helper.getByID('/getBlog',blogModel,router)
helper.updateRoute('/updateBlog',blogModel,router)
helper.deleteRoute('/deleteBlog',blogModel,router)
//
//
//
//
//
//

// home ----------------------------------------------home---------------------




//-----------------------ads-------------------------------------------------ads--
 helper.postRoute('/addAd',adsModel,router)
 helper.getRoute('/getAds',adsModel,router)
 helper.getByID('/getAd',adsModel,router)
 helper.updateRoute('/updateAd',adsModel,router)
 helper.deleteRoute('/deleteAd',adsModel,router)
//
//
//
//
//
//
//-----------------------client-------------------------------------------------client--
helper.postRoute('/addClient',clientModel,router)
helper.getRoute('/getClients',clientModel,router)
helper.getByID('/getClient',clientModel,router)
helper.updateRoute('/updateClient',clientModel,router)
helper.deleteRoute('/deleteClient',clientModel,router)
//
//
//
//
//
//
//-----------------------team-------------------------------------------------team--
helper.postRoute('/addTeam',teamModel,router)
helper.getRoute('/getTeams',teamModel,router)
helper.getByID('/getTeam',teamModel,router)
helper.updateRoute('/updateTeam',teamModel,router)
helper.deleteRoute('/deleteTeam',teamModel,router)
//
//
//
//
//
//
//-----------------------subscribe-------------------------------------------------subscribe--
helper.postRoute('/addLink',linkModel,router)
helper.getRoute('/getLinks',linkModel,router)
helper.getByID('/getLink',linkModel,router)
helper.updateRoute('/updateLink',linkModel,router)
helper.deleteRoute('/deleteLink',linkModel,router)
//
//
//
//
//
//
//-----------------------what we do-------------------------------------------------what we do--
helper.postRoute('/addDo',doModel,router)
helper.getRoute('/getDos',doModel,router)
helper.getByID('/getDo',doModel,router)
helper.updateRoute('/updateDo',doModel,router)
helper.deleteRoute('/deleteDo',doModel,router)
//
//
//
//
//
//
//-----------------------swiper-------------------------------------------------swiper--
helper.postRoute('/addSwiper',swiperModel,router)
helper.getRoute('/getSwipers',swiperModel,router)
helper.getByID('/getSwiper',swiperModel,router)
helper.updateRoute('/updateSwiper',swiperModel,router)
helper.deleteRoute('/deleteSwiper',swiperModel,router)
//
//
//
//
//
//
//-----------------------servies-------------------------------------------------servies--
helper.postRoute('/addServies',serviesModel,router)
helper.getRoute('/getServiess',serviesModel,router)
helper.getByID('/getServies',serviesModel,router)
helper.updateRoute('/updateServies',serviesModel,router)
helper.deleteRoute('/deleteServies',serviesModel,router)

//
//
//
//
//
//
//-----------------------email-------------------------------------------------email--
helper.postRoute('/addSubscripe',subscripeModel,router,true)
helper.getRoute('/getSubscripes',subscripeModel,router, true)
module.exports = router;



helper.postRoute('/addFaq',faqModel,router)
helper.getRoute('/getFaqs',faqModel,router)
helper.getByID('/getFaq',faqModel,router)
helper.updateRoute('/updateFaq',faqModel,router)
helper.deleteRoute('/deleteFaq',faqModel,router)


router.post('/login',()=>{login}
)