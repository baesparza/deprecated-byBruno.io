import { useEffect, useState } from "react";
import { NotionClient } from "../core/notion";

export const useDatabase = (database_id: string) => {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await NotionClient.databases.query({
                        database_id,
                        page_size: 4,
                    });

                    setData(response.object);
                } catch (err) {
                    setError(err as any)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [database_id])

    return { data, error, loading }
}
// (async () => {
//     const databaseId = '897e5a76-ae52-4b48-9fdf-e71f5945d1af';
//     const response = await notion.databases.query({
//         database_id: databaseId,
//         filter: {
//             or: [
//                 {
//                     property: 'In stock',
//                     checkbox: {
//                         equals: true,
//                     },
//                 },
//                 {
//                     property: 'Cost of next trip',
//                     number: {
//                         greater_than_or_equal_to: 2,
//                     },
//                 },
//             ],
//         },
//         sorts: [
//             {
//                 property: 'Last ordered',
//                 direction: 'ascending',
//             },
//         ],
//     });
//     console.log(response);
// })();
