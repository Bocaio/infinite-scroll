import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'


const API_URL = import.meta.env.VITE_API_URL;

interface Voice {
    id : string 
    name : string
    sample_text : string
    sample_mp3_url : string
}

interface Response {
    items : Voice[]
}
const fetchProjects = async ({ pageParam = 0 }): Promise<Response> => {
    const {data} = await axios.get<Response>(`${API_URL}/get-voice-samples?page=${pageParam}&per_page=10`)
    return data
  }


const useQueryVoiceList = () => {
    const query = useInfiniteQuery({queryKey : ["voiceLists"], queryFn : fetchProjects, initialPageParam : 1,getNextPageParam : ( ) =>  2})
    return query;
}

export default useQueryVoiceList;   