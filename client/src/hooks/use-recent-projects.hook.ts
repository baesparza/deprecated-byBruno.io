import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { ProjectModel } from "./../models/project.model";

type _ProjectsResponse = { projects: Array<ProjectModel.Project> };

export type useAbstractProjectsLoader = () => {
    data: _ProjectsResponse | null,
    error?: Error | null,
    loading?: boolean
};

export const useRecentProjects: useAbstractProjectsLoader = () => {

    const [data, setData] = useState<null | _ProjectsResponse>(null)
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
export const useAllProjects: useAbstractProjectsLoader = () => {

    const [data, setData] = useState<null | _ProjectsResponse>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        axios.get(`${BASE_URL}/api/all-projects`)
            .then(res => setData(res.data))
            .catch(setError)
            .finally(() => setLoading(false));
    }, [])

    return { data, error, loading }
}
