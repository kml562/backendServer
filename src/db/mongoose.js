import mongoose from "mongoose";

export const startServer = async (app,port,url)=>{
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log("Connected to DB");
        app.listen(port,()=>{
            console.log(`Running Up the HIll at ${port} km\hr`)
        })
    } catch (error) {
        console.log(error);
    }
}