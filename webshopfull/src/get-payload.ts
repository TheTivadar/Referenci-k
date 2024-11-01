import dotenv from "dotenv"
import nodemailer from "nodemailer"
import path from "path"
import payload from "payload"
import type { InitOptions } from "payload/config"
//npm add dotenv
//npm add payload
//npm add nodemailer
//npm add -D @types/nodemailer

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    secure:true,
    port: 465,
    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY
    }
})


let cached = (global as any).payload

if(!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    }
}
interface Args {
    initOptions? : Partial<InitOptions>
}
//:Promise<Payload>
export const getPayloadClient = async ({initOptions,}: Args = {}) => {
    if(!process.env.PAYLOAD_SECRET){
        throw new Error ('PAYLOAD_SECRET is missing')
    }

    if(cached.client) {
        return cached.client
    }

    if(!cached.promise) {
        cached.promise = payload.init({
            email:{
                transport: transporter,
                fromAddress: "swagtivadar@gmail.com",
                fromName:'DigitalMarketPlace'
            },
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false: true, ...(initOptions || {}),
        })
    }

    try{
        cached.client = await cached.promise
    }catch(e: unknown) {
        cached.promise = null
        throw e
    }


    return cached.client
}