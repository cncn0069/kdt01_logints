import { useEffect, useState } from 'react'
import {useAtom} from "jotai";
import { loginState } from '../atoms/IsLoginAtom';
import { Link } from 'react-router-dom';
import TailButton from '../UI/TailButton';
import { useNavigate } from 'react-router-dom';

export default function Nav() {

    const navigate = useNavigate();
    const [login, setLogin] = useAtom(loginState);

    const [button, setButton] = useState<React.ReactNode>();

    const handleClick = ()=>{
        
        if(login == true)
            setLogin(!login);
        
        navigate("/");
    }

    useEffect(()=>{

        if(login){
            setButton(<TailButton color='lime' caption={"로그아웃"} onClick={handleClick}/>);
        }else{
            setButton(<TailButton color='lime' caption={"로그인"} onClick={handleClick} />);
        }

    },[login])

  return (
    <div className='flex w-full flex-row justify-between items-center'>
        <div className='m-2'>아</div>
        <ul className='flex justify-center items-center text-white'>
            <li><Link className='' to="/">홈으로</Link></li>
            {login && <>
                    <li><Link to="/Subway">지하철</Link></li>
                    <li><Link to="/TodoList">할일 목록</Link></li>
                </>
                
            }
        </ul>
        <div>
            {button}
        </div>
    </div>
    

  )
}
