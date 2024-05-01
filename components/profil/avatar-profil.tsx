'use client'
import useSWR from "swr";
import { Avatar, AvatarImage } from "../ui/avatar";

const fetcher = (url: string) => fetch(url).then((res) => res.json());


interface ProfilType {
    id: number,
    avatar: string,
    email: string,
    first_name: string,
    last_name: string
}

export default function AvatarProfil() {


    const { data, error, isLoading } = useSWR('https://reqres.in/api/users?page=2', fetcher)
    console.log(data)
    return (
        <>
            <div className="grid grid-cols-4 gap-5 m-5">
                {isLoading ? 'Loading boss' : data.data.map((user: ProfilType, i: number) => (
                    <div key={i} className="p-5 border border-slate-100">
                        <div className="flex gap-4">
                            <Avatar>
                                <AvatarImage src={user.avatar} alt={`image-${user.first_name}`} />
                            </Avatar>
                            <div>
                                <h1>{user.first_name} {user.last_name}</h1>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}