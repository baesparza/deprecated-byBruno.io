import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.DEV ? 'https://bruno-esparza-codes-866tv.ondigitalocean.app' : '';

export const useRecentProjects = () => {

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        axios.get(`${BASE_URL}/api/recent-projects`)
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [])

    return { data, error, loading }
}
