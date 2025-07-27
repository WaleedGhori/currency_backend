const moongose = require('mongoose');
export const connectDB = async () => {
    try{
        const connectInstance  = await moongose.connect(process.env.MONGOOSE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(connectInstance.connection.host);
    }catch(error){
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error('Error:', error);
        }
        process.exit(1);
    }
}

