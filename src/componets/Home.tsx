import Login from './Login';
import { useAtom } from 'jotai';
import { loginState } from '../atoms/IsLoginAtom';

export default function Home() {
    const [ls] = useAtom(loginState);

    const username = localStorage.getItem('username');
    //로그인이 되어있는 상태라면

    //로그인이 안되어있는 상태라면

    // useEffect(()=>{

    //     if(ls)
    //     {
    //         //로그인되어있는 상태라면
    //         navigate("/Subway");
    //     }else{
            
    //         navigate("/Login");
    //     }
        
    // },[])

  return (
    <div>
      {ls ? username + "님 반갑습니다..!"
          : <Login /> 
    }
    </div>
  )
}
