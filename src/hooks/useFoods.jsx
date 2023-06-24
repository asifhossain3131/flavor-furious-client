import { useQuery } from '@tanstack/react-query';

const useFoods = (foodPerPage,currentPage) => {
      const{data:menus=[], isLoading:isMenuLoading, refetch}=useQuery({
        queryKey:['menus', foodPerPage, currentPage],
        queryFn:async()=>{
            const res=await fetch(`https://flavor-fusion-server-six.vercel.app/menus?limit=${foodPerPage}&currentPage=${currentPage}`)
            return res.json()
        }
      })
      return [menus, isMenuLoading,refetch]
};

export default useFoods;