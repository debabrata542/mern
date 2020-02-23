import axios from 'axios';

class EmployeeService {

    deleteEmployee(url, id) {
        axios.get(url + id)
            .then(() => {
                console.log('Employee Deleted !!!')
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default EmployeeService;