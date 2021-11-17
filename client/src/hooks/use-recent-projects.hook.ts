import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { ProjectModel } from "./../models/project.model";

export const useRecentProjects = () => {

    const [data, setData] = useState<null | { projects: Array<ProjectModel.Project> }>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        axios.get(`${BASE_URL}/api/recent-projects`)
            .then(res => setData(res.data))
            .catch(setError)
            .finally(() => setLoading(false));
    }, [])

    return { data, error, loading }
}
