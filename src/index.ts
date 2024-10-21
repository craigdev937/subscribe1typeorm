import "dotenv/config";
import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import { ERR } from "./middleware/MidError";
import { phoneRt } from "./routes/PhoneRt";

(async () => {
    const app: express.Application = express();
    app.use(helmet());

    // CORS Setup
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", 
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", 
                "POST, GET, PUT, PATCH, DELETE");
            res.status(200).json({ "status message": "OK" });
        };
        next();
    });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api/phones", phoneRt);
    app.use(ERR.notFound);
    app.use(ERR.errHandler);
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    });
})();



