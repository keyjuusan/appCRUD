import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import shortid from "shortid";

const FormCreate = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const enviarDatos = (data, e) => {
        e.target.reset();
        data.id = shortid.generate();
        props.setUsers([...props.users, data]);
    }

    return (
        <Fragment>
            <h3>Creando Usuario</h3>
            <form onSubmit={handleSubmit(enviarDatos)}>
                <input {...register("nombre", {
                    required: {
                        value: true,
                        message: "Por favor escriba su nombre."
                    }
                })} className="form-control my-2" placeholder="Ingrese su nombre" type="text" />
                <span className="text-danger">{errors?.nombre?.message}</span>
                <input {...register("apellido", {
                    required: {
                        value: true,
                        message: "Por favor escriba su apellido."
                    }
                })} className="form-control my-2" placeholder="Ingrese su apellido" type="text" />
                <span className="text-danger">{errors?.apellido?.message}</span>
                <button className="btn btn-primary" type="submit">Crear</button>
            </form>
        </Fragment>
    )
}

export default FormCreate;