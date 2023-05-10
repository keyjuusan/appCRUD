import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const FormEdit = (props) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: props.user
    });

    const editarDatos = (e) => {
        setValue("nombre", props.user.nombre);
        setValue("apellido", props.user.apellido);
        // e.target.reset();
        console.log(e)
        props.updateUser(e.id, e);
    }

    return (
        <Fragment>
            <h3>Editando Usuario</h3>
            <form onSubmit={handleSubmit(editarDatos)}>
                <input  {...register("nombre", {
                    required: {
                        value: true,
                        message: "Por favor escriba su nombre."
                    }
                })} className="form-control my-2" placeholder="Ingrese su nombre" type="text" />
                <span className="text-danger">{errors?.nombre?.message}</span>
                <input  {...register("apellido", {
                    required: {
                        value: true,
                        message: "Por favor escriba su apellido."
                    }
                })} className="form-control my-2" placeholder="Ingrese su apellido" type="text" />
                <span className="text-danger">{errors?.apellido?.message}</span>
                <button className="btn btn-primary" type="submit">Editar</button>
            </form>
        </Fragment>
    )
}

export default FormEdit;