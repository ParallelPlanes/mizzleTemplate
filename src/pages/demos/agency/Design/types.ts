import {IconType} from "react-icons";
import {User} from "@/types/user";

export type ServiceType = {
    icon?: IconType,
    image?: string
    title: string
    description?: string
    url?: string
}


export type DateType = {
    date?: number
    month?: string | number
    year?: number
    hour?: number
    minute?: number
}

export type ProjectType = {
    image: string
    name: string
    description?: string
    category?: string
    tags?: string[]
    url: string
    createdBy?: {
        user?: User
        team?: User[]
    }
    createdAt?: DateType
    status?: 'published' | 'private'
}

export type TestimonialType = {
    userId?: User['id']
    user: User
    title?: string
    comment: string
    rating?: number
}

export type StatisticType = {
    title: string;
    stat: number,
    description: string
    prefix?: string;
    suffix?: string;
}

export type BlogType = {
    image?: string
    title: string
    description?: string
    category?: string
    tags?: string[]
    url: string
    publishedBy?: User
    publishedAt?: DateType
}