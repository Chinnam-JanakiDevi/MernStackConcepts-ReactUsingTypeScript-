import { useState } from "react";
import './TableWithCrud.css'

interface Person {
  id: number;
  name: string;
  phone: string; // since phone number is not a countable entity
  address: string;
  gender?: 'male' | 'female'
}

const defaultPerson: Person = {
    id: 0, 
    name: "",
    phone: "",
    address: "",
    gender: undefined
}

enum ComponentState{
    INSERT,
    UPDATE
}

const toTitleCase = (data: string) => {
    // abc => Abc
    // abc xyz => Abc Xyz
    const words = data.split(" ")
    return words.map(word=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(" ")
}

export const TableWithCrud: React.FC = (): JSX.Element => {

  const [currentState, setCurrentState] = useState<ComponentState>(ComponentState.INSERT)

  const [person, setPerson] = useState<Person>(defaultPerson);

  const [personList, setPersonList] = useState<Person[]>([]);

  const [sortDirection, setSortDirection] = useState<number>(1);
  
  const [sortKey, setSortKey] = useState<"name" | "address" | "phone" | "gender">("name");


  const handleSubmit = () => {
    if(currentState === ComponentState.INSERT){
        const newId = new Date().getTime()  // This logic is not good for production
        setPersonList([...personList, {...person, id:newId}]);
    }else{
        const personToEdit = personList.find((p)=>{
          console.log(p);
          
            return p.id === person.id
        })
        if (personToEdit){
            personToEdit.name = person.name
            personToEdit.address = person.address
            personToEdit.phone = person.phone
            personToEdit.gender = person.gender
        }
        setPersonList([...personList])
    }
    
    setPerson(defaultPerson);
    setCurrentState(ComponentState.INSERT)
  };

  const handleDelete = (personToBeDeleted: Person) => {
    const filteredPersonList = personList.filter((person)=>{
        return person.id !== personToBeDeleted.id
    })
    setPersonList(filteredPersonList)
  }


  const handleEdit = (personToEdit: Person) => {
    setPerson(personToEdit)
    setCurrentState(ComponentState.UPDATE)
  }

  const handleSort = (key: "name" | "phone" | "address" | "gender" )=>{
    // const sortedList = personList.sort((person1, person2)=>{
    //     if (key === "name"){
    //         return person1.name > person2.name ? 1 : -1
    //     }else if(key === "phone"){
    //         return person1.phone > person2.phone ? 1 : -1
    //     }else{
    //         return person1.address > person2.address ? 1 : -1
    //     }
    // })
    const sortedList = personList.sort((person1, person2)=> (person1[key]!) > (person2[key]!) ? 1 * sortDirection : -1 * sortDirection)
    setPersonList([...sortedList])
    setSortDirection(sortDirection*-1)
    setSortKey(key)
  }

  return (
    <div>
      <div>
        <form onSubmit={(event)=>{ event.preventDefault();  handleSubmit()}}>
            <input
                placeholder="Name"
                value={person.name}
                onChange={(e) => {
                    setPerson({ ...person, name: toTitleCase(e.target.value) });
                }}
                required
            />
            <input
                placeholder="Phone Number"
                value={person.phone}
                maxLength={10}
                onChange={(e) => {
                    const phoneRegex = /^\d*$/
                    if (phoneRegex.test(e.target.value)){
                        setPerson({ ...person, phone: e.target.value });
                    }
                }}
                required
                minLength={10}
                pattern="^[6789]\d{9}$"
            />
            <input
                placeholder="Address"
                value={person.address}
                onChange={(e) => {
                    setPerson({ ...person, address: e.target.value });
                }}
                minLength={3}
                required
            />
            <select required value={person.gender} onChange={(e)=>{setPerson({...person, gender: e.target.value === 'male'? 'male':'female'})}}>
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <br />
            <button type="submit">Submit</button>
            <button type="reset" onClick={() => {
                setCurrentState(ComponentState.INSERT)
                setPerson(defaultPerson)}}>Cancel</button>
        </form>
        
      </div>
      <div>
        {personList.length ? (
          <table>
            <thead>
              <tr>
                <th className="pointer" onClick={()=>{handleSort("name")}}>Name <span className={sortKey === 'name'?'sorted-key':'unsorted-key'}>{sortDirection>0?'\u2193':'\u2191'}</span></th>
                <th className="pointer" onClick={()=>{handleSort("phone")}}>Phone Number <span className={sortKey === 'phone'?'sorted-key':'unsorted-key'}>{sortDirection>0?'\u2193':'\u2191'}</span></th>
                <th className="pointer" onClick={()=>{handleSort("address")}}>Address <span className={sortKey === 'address'?'sorted-key':'unsorted-key'}>{sortDirection>0?'\u2193':'\u2191'}</span></th>
                <th className="pointer" onClick={()=>{handleSort("gender")}}>Gender <span className={sortKey === 'gender'?'sorted-key':'unsorted-key'}>{sortDirection>0?'\u2193':'\u2191'}</span></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {personList.map((person)=>(
                    <tr key={person.id} title={person.id.toString()}>
                        <td>{person.name}</td>
                        <td>{person.phone}</td>
                        <td>{person.address}</td>
                        <td>{person.gender}</td>
                        <td>
                        <button onClick={()=>{handleEdit(person)}}>&#x270E;</button>
                            <button onClick={()=>{handleDelete(person)}}>&#xD83D;</button>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <h2>No persons added</h2>
        )}
      </div>
    </div>
  );
};