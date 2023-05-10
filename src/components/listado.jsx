import React from "react";

const Listado = (props) => {
    // console.log(props.users)
    const delRow = (idRow) => {
        const usersFilter = props.users.filter(item => item.id !== idRow);
        props.setUsers(usersFilter);
    }

    const editRow = (row) => {
        props.setModoEdit(true);
        props.setUser(row);
        props.setId(row.id);

    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((item, index) =>
                        < tr key={index}>
                            <td >{item.nombre}</td>
                            <td >{item.apellido}</td>
                            <td>
                                <button onClick={() => editRow(item)} className="btn btn-sm btn-warning">Editar</button>
                                <button onClick={() => delRow(item.id)} className="btn btn-sm btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table >
    )
}

export default Listado;