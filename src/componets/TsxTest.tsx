import TailButton from '../UI/TailButton';

type nameT = [string, number]

//interface는 = 이 없다
//한줄 일때는 , 줄 나뉘면
//오브젝트트 형식은 -> interface 
interface Person {
  name:string;
  age:number;
}

// type Person = {
//   name:string;
//   age:number;
// }

type Person2 = {name:string, age:number}

export default function TsxTest() {
    let name:string = "PNU";
    let age:number = 20;

    let names:string[] = ['kim','Lee'];
    let ages:Array<number> = [10,22,31];
    let tF:boolean[] = [true,false,true];
    //심볼 사용시 항상 user[ ] 등 사용
    const id:symbol = Symbol('id');
    //let ids:symbol[] = [''];

    const nameTuple:[string, number] = ['김',10];
    const nameTuple2:nameT = ['김',10];
    
    // let person:{name:string, age:number} = {
    //   name:"Lee",
    //   age:22,
    // }

    let person:Person = {
      name:"Lee",
      age:22,
    }

    let person2:Person2 = {
      name:"Kim",
      age:28,
    }

    const user = {
      name : 'An',
      [id] : 'cncn'
    }
    //함수 타입 선언 1 : 인수가 없고 리턴이 없는 경우
    const handleOk = ():void => {
      alert("안녕하세요");
    };

    //함수 타입 선언 2 : 인수가 없고 리턴이 있는 경우
    const handleOk2 = ():string=>{
      
      return "안녕하세요2" 
    };

    //함수 타입 선언 3 : 인수가 있고 리턴이 없는 경우
    const helloStr = (name:string):string => {
      return "안녕하세요"
    }

    const handleOk3 = ():string=>{
      let sr = '2'
      const s:string = helloStr("크크");
      alert(`${s + sr}`);

      return "안녕하세요"
    };
  return (
    <div>
      <ul>
        <li>이름 : {name},나이 : {age} </li>
        <li> {names.map((item:string, idx:number) => <span key={item + idx}>{item}, </span>)} </li>
        <li> {ages.map((item:number, idx:number) => <span key={item + idx}>{item}, </span>)}</li>
        <li> {tF.map((item:boolean, idx:number) => <span key={(item?"true":"false") + idx}>{item ? "true" : "false"}, </span>)}</li>
        <li> {user[id]}</li>
        <li> 이름 : {nameTuple[0]}, 나이 : {nameTuple[1]}</li>
        <li> 이름 : {nameTuple2[0]}, 나이 : {nameTuple2[1]}</li>
        <li> 이름 : {person.name}, 나이 : {person.age}</li>
        <li> 이름 : {person2.name}, 나이 : {person2.age}</li>

        <div>
          <TailButton color='orange' caption={'안녕하세요'}  onClick={handleOk3}/>
        </div>
    </ul>
    </div>
  )
}
