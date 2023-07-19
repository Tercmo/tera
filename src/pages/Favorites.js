import React, { Fragment } from 'react'
import {useSelector } from 'react-redux'
import '../css/general.css'; 
import 'bootstrap/dist/css/bootstrap.css';

export const Favorites = () => {

    const { celebritiesList } = useSelector(state => state.cel);
    return (
        <Fragment>
            <div>Listado de Favoritos</div>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>ID </th>
                        <th scope='col'>Nombre </th>
                        <th scope='col'>Nacionalidad </th>
                        <th scope='col'>Edad </th>
                    </tr>
                </thead>
                <tbody>
                    {celebritiesList.map(c => {
                        return (
                            <tr>
                                <td scope='row'>{c.birthday}</td>
                                <td scope='row'>{c.name}</td>
                                <td scope='row'>{c.nationality}</td>
                                <td scope='row'>{c.age}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </Fragment>
    )
}