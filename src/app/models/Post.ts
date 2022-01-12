import { Timestamp } from "rxjs";
import { User } from "./User";

export interface Post{
    post_id: number;
    post_created: string;
    post_img: string;
    post_description: string;
    user: User;
}