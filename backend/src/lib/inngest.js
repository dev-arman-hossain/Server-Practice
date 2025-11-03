import {Inngest} from "inngest"
import { connectDB } from "./db.js"
import User from "../models/User.js"

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
    {id: "sync-user" },
    {event: "clerk/user.created"},
    async ({event}) => {
        await connectDB();

        console.log(event.data)
        const {id,email_addresses, first_name, last_name, image_url} = event.data;

        const newUser ={
            clerkId: id,
            email: email_addresses[0]?.email_address,
            firstName: first_name,
            lastName: last_name,
            profileImage: image_url,
        }
        await User.create(newUser);
        //additional logic can be added here
    }
)

const deleteUserFromDB = inngest.createFunction(
    {id: "delete-user-from-db" },
    {event: "clerk/user.deleted"},
    async ({event}) => {
        await connectDB();

        const {id} = event.data;
        await User.deleteOne({ clerkId: id });
        // Additional cleanup logic can be added here
    }
)

export const functions = [syncUser,deleteUserFromDB]