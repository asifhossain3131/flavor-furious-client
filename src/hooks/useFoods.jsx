import { useQuery } from '@tanstack/react-query';

const useFoods = (foodPerPage,currentPage) => {
      const{data:menus=[], isLoading:isMenuLoading, refetch}=useQuery({
        queryKey:['menus', foodPerPage, currentPage],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/menus?limit=${foodPerPage}&currentPage=${currentPage}`)
            return res.json()
        }
      })
      return [menus, isMenuLoading,refetch]
};

export default useFoods;