import { useEffect, useState } from "react";
import editIcon from '../../../public/icons/edit.png';
import deleteIcon from '../../../public/icons/delete.png';
import { filterUsersList } from "../../utils/helper";


const UsersList = () => {
    const [searchText, setSearchText] = useState('');
    const [usersList, setUsersList] = useState([]);
    const [filteredUsersList, setFilteredUsersList] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);
    const getAllUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/users-list');
            const result = await response.json();
            console.log('result in userslist', result);
            setUsersList(result.users);
            setFilteredUsersList(result.users);
        } catch (error) {
            console.error('error in login: ',error);
        }
    }

    const deleteUser = async(id) => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/delete-user/'+id);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('error in deleteuser: ', error);
        }
    };

  return (
    <>
        <h2>Users list</h2>
        <div>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search"/>
            <button onClick={() => {
                const updatedData = filterUsersList(searchText, usersList);
                setFilteredUsersList(updatedData);
            }}>Search</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Sl. no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    {/* <th>Edit</th> */}
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredUsersList?.map((user, index) => {
                        return(
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.firstname + ' ' + user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                {/* <td><img src={editIcon} style={{width: '25px'}}/></td> */}
                                <td><img src={deleteIcon} style={{width: '25px'}} onClick={() => deleteUser(user._id)}/></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default UsersList;