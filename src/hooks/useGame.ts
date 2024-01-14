import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClinet = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games',slug],
    queryFn: ()=>apiClinet.get(slug)
})

export default useGame