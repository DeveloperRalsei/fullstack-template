import { wait } from '@/utils/utils'
import { meow } from '@common'
import { Loader } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/mrr')({
    component: RouteComponent,
})

async function fetchMeow(): Promise<meow> {
    const res = await fetch("/api/meow")
    if (!res.ok) {
        throw new Error()
    }

    await wait(1500)

    return res.json()
}

function RouteComponent() {
    const { data, isLoading, error } = useQuery<meow>({
        queryKey: ["mrrr"],
        queryFn: fetchMeow
    })

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : error ? "something went wrong 😿" : (
                <>
                    <div>
                        Data fetched :D <br />
                        The cat says {data?.[':3']}


                    </div>
                    <br />
                    <div>
                        Data: <br />
                        {JSON.stringify(data)}
                    </div>
                </>
            )}
        </div>
    )
}
