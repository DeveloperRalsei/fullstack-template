import { meow, wait } from "#";
import { Loader } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mrr")({
    component: RouteComponent,
    loader: () => fetchMeow(),
    pendingComponent: () => <Loader />,
    errorComponent: () => "Something went wrong 😿",
});

async function fetchMeow(): Promise<meow> {
    const res = await fetch("/api/meow");
    if (!res.ok) {
        throw new Error();
    }

    await wait(1500);

    return res.json();
}

function RouteComponent() {
    const data: meow = Route.useLoaderData();

    return (
        <div>
            <>
                <div>
                    Data fetched :D <br />
                    The cat says {data[":3"]}
                </div>
                <br />
                <div>
                    Data: <br />
                    {JSON.stringify(data)}
                </div>
            </>
        </div>
    );
}
