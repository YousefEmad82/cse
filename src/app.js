const express = require('express')
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()



//handlebars paths
const publicPath = path.join(__dirname,'../public')
const partialsPath = path.join(__dirname,'../templates/partials')
const viewsPath = path.join(__dirname,'../templates/views')

//handlebars setup
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//using the public path for static files
app.use(express.static(publicPath))



/////////////////////////////////////////////////////////////
/////////////////     ROUTING     //////////////////////////
////////////////////////////////////////////////////////////
app.get('',(req,res)=>{
        res.render('index',{
            name : 'Nono,Gogo,Gee,Nasser',
        })
})

/*
app.get('/quote',(req,res)=>{
    tailorSwift((error,data)=>{
        if(error){
            return res.send('check your internet conection')
        }
        res.send(data)
    })
})
*/



/////////////////////////////////////////////////////////////
/////////////////    RUNNING THE SERVER     /////////////////
////////////////////////////////////////////////////////////
app.listen(port,()=>{
    console.log('the server is running on port : '+port)

})
