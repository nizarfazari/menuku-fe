"use client"

import useSWR from "swr";


const fetcher = (url: string) => fetch(url).then((res) => res.json());


type MitraType = {
    id: number,
    username: string,
    name: string,
    email: string,
}

export default function AvatarProfil() {


    const { data, error, isLoading } = useSWR('http://localhost:8080/api/mitra', fetcher)
    
    return (
        <>
            <div className="grid grid-cols-4 gap-5 m-5">
                {isLoading ? 'Loading boss' : data.data.map((user: MitraType, i: number) => (
                    <div key={i} className="p-5 border border-slate-100">
                        <div className="flex gap-4">
                            {/* <Avatar>
                                <AvatarImage src={user.avatar} alt={`image-${user.first_name}`} />
                            </Avatar> */}
                            <div>
                                <h1>{user.name} {user.username}</h1>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}