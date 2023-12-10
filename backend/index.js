import express from 'express'

const app=express()

// app.get('/',(req,res)=>{
//      res.send("Hello Welcome Home");
// })




app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
           id:1,
           name:"First joke",
           content:"This is first joke"
        },
        {
           id:2,
           name:"second joke",
           content:"This is second joke"
        },
        {
           id:3,
           name:"Third  joke",
           content:"This is third joke"
        },
        {
           id:4,
           name:"Fourth joke",
           content:"This is fourth joke"
        },
        {
           id:5,
           name:"Fifth joke",
           content:"This is fifth joke"
        }
   
   ]

   res.send(jokes);
})

const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})