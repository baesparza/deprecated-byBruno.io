import axios from "axios";
import { useEffect, useState } from "react";

export const useDatabase = (database_id: string) => {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get('http://localhost:5000/api/recent-projects')
                    setData(response);
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
