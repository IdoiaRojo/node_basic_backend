const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = 'No name', apiKey, page = 1, limit = 10} = req.query;
  res.json({
    msg: 'get API - controlador',
    q, 
    nombre, 
    apiKey,
    page,
    limit
  });
}

const usuariosPost = (req, res = response) => {
  const { nombre, edad} = req.body;

  res.status(201).json({
    msg: 'post API - controlador',
    nombre,
    edad
  });
}

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.status(400).json({
    msg: 'put API - controlador',
    id
  });
}

const usuariosPatch = (req, res = response) => {
  res.status(400).json({
    msg: 'patch API - controlador'
  });
}

const usuariosDelete = (req, res) => {
  res.json({
    msg: 'delete API - controlador'
  });
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}
