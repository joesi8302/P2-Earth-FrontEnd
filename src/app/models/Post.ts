import { Timestamp } from "rxjs";
import { User } from "./User";

export interface Post{
    id: number;
    post_created: string;
    post_img: string;
    post_description: string;
    user: User;
}