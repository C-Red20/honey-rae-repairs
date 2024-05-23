export const getNonStaffUsers = () => {
    return fetch('http://localhost:8088/users?_isStaff=false').then((res) => 
        res.json()
    )
}

export const getStaffUsers = () => {
    return fetch('http://localhost:8088/users?_isStaff=true').then((res) => 
        res.json()
    )
}