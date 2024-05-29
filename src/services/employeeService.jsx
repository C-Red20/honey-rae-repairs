export const getAllEmployees = () => {
    return fetch(
        'http://localhost:8088/employees?_expand=user&_embed=employeeTickets'
    ).then((res) => res.json())
}

export const getEmployeeByUserId = (id) => {
    return fetch(
        `http://localhost:8088/employees?userId=${id}&_expand=user&_embed=employeeTickets`
    ).then((res) => res.json())
}